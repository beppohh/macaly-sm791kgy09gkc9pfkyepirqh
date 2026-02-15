import { mutation, internalMutation, internalQuery, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

// Mutation to create a new contact submission and schedule email notification
export const submitContactForm = mutation({
  args: {
    firma: v.string(),
    branche: v.string(),
    vorname: v.string(),
    nachname: v.string(),
    strasse: v.string(),
    plz: v.string(),
    ort: v.string(),
    land: v.string(),
    email: v.string(),
    telefon: v.string(),
    anliegen: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      firma: args.firma,
      branche: args.branche,
      vorname: args.vorname,
      nachname: args.nachname,
      strasse: args.strasse,
      plz: args.plz,
      ort: args.ort,
      land: args.land,
      email: args.email,
      telefon: args.telefon,
      anliegen: args.anliegen,
      createdAt: Date.now(),
      status: "pending",
    });

    console.log("New contact submission created:", contactId);

    // Schedule the email notification action to run immediately after this transaction
    await ctx.scheduler.runAfter(0, internal.contacts.sendNotificationEmail, {
      contactFormId: contactId,
    });

    return contactId;
  },
});

// Internal action to send email notification
export const sendNotificationEmail = internalAction({
  args: {
    contactFormId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    "use node";

    // Get the contact form details
    const contactForm = await ctx.runQuery(internal.contacts.getContactFormDetails, {
      contactFormId: args.contactFormId,
    });

    if (!contactForm) {
      console.error("Contact form not found:", args.contactFormId);
      return;
    }

    try {
      const emailMessage = `Neue Beratungsanfrage von ${contactForm.firma}

Firmendaten:
- Firma: ${contactForm.firma}
- Branche: ${contactForm.branche}

Ansprechpartner:
- Name: ${contactForm.vorname} ${contactForm.nachname}
- E-Mail: ${contactForm.email}
- Telefon: ${contactForm.telefon}

Adresse:
${contactForm.strasse}
${contactForm.plz} ${contactForm.ort}
${contactForm.land}

Anliegen:
${contactForm.anliegen}

---
Diese Nachricht wurde über das Kontaktformular auf brehm-consulting.com gesendet.`;

      const response = await fetch(process.env.EMAIL_NOTIFICATION_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toEmail: process.env.RECIPIENT_EMAIL!,
          subject: `Neue Beratungsanfrage: ${contactForm.firma} (${contactForm.branche})`,
          message: emailMessage,
          chatId: process.env.CHAT_ID!,
          appName: process.env.APP_NAME!,
          secretKey: process.env.SECRET_KEY!,
        }),
      });

      if (response.ok) {
        console.log("Email notification sent successfully to", process.env.RECIPIENT_EMAIL);
        await ctx.runMutation(internal.contacts.updateContactFormStatus, {
          contactFormId: args.contactFormId,
          status: "sent",
        });
      } else {
        console.error("Failed to send email notification:", response.status, response.statusText);
        const errorText = await response.text();
        console.error("Error details:", errorText);
        await ctx.runMutation(internal.contacts.updateContactFormStatus, {
          contactFormId: args.contactFormId,
          status: "failed",
        });
      }
    } catch (error) {
      console.error("Error sending email notification:", error);
      await ctx.runMutation(internal.contacts.updateContactFormStatus, {
        contactFormId: args.contactFormId,
        status: "failed",
      });
    }
  },
});

// Internal query to get contact form details
export const getContactFormDetails = internalQuery({
  args: {
    contactFormId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactFormId);
  },
});

// Internal mutation to update contact form status
export const updateContactFormStatus = internalMutation({
  args: {
    contactFormId: v.id("contacts"),
    status: v.union(v.literal("pending"), v.literal("sent"), v.literal("failed")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.contactFormId, {
      status: args.status,
    });
  },
});
