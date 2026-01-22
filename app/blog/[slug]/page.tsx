import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog-data';
import BlogArticleContent from '@/components/blog-article-content';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();

  // Guard: Next.js can prefetch the route pattern ("/blog/[slug]") in export mode.
  // If it's not listed here, it triggers a 500. Including it ensures a clean 404 via notFound().
  const safeSlugs = Array.from(new Set([...slugs, '[slug]']));

  return safeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Artikel nicht gefunden | Brehm Consulting',
    };
  }

  return {
    title: `${post.title} | Brehm Consulting Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticleContent post={post} />;
}
