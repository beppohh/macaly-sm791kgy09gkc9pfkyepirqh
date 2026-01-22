import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import MarketingPageContent from '@/components/marketing-page-content';

export const metadata: Metadata = siteMetadata['/marketing'];

export default function MarketingPage() {
  return <MarketingPageContent />;
}
