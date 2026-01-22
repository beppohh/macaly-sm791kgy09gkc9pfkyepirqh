import { notFound } from 'next/navigation';
import WissenArticleContent from '@/components/wissen-article-content';
import { getWissenPostBySlug, getAllWissenSlugs } from '@/lib/wissen-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllWissenSlugs();

  // Guard: Next.js can prefetch the route pattern ("/wissen/[slug]") in export mode.
  // If it's not listed here, it triggers a 500. Including it ensures a clean 404 via notFound().
  const safeSlugs = Array.from(new Set([...slugs, '[slug]']));

  return safeSlugs.map((slug) => ({ slug }));
}

export default async function WissenArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getWissenPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <WissenArticleContent post={post} />;
}
