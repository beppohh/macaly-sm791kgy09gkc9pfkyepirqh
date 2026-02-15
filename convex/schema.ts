import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import { authTables } from "@convex-dev/auth/server"

export default defineSchema({
  ...authTables,
  contacts: defineTable({
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
    createdAt: v.number(),
    status: v.optional(v.union(v.literal("pending"), v.literal("sent"), v.literal("failed"))),
  }),
})
