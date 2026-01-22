import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import WissenPageContent from '@/components/wissen-page-content';

export const metadata: Metadata = siteMetadata['/wissen'];

export default function WissenPage() {
  return <WissenPageContent />;
}
