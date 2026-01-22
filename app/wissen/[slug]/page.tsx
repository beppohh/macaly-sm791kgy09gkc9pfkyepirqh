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
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function WissenArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getWissenPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <WissenArticleContent post={post} />;
}
