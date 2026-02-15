import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import WebdesignPageContent from '@/components/webdesign-page-content';

export const metadata: Metadata = (siteMetadata as Record<string, Metadata>)['/webdesign'];

export default function WebdesignPage() {
  return <WebdesignPageContent />;
}
