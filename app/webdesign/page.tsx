import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import WebdesignPageContent from '@/components/webdesign-page-content';

export const metadata: Metadata = siteMetadata['/webdesign'];

export default function WebdesignPage() {
  return <WebdesignPageContent />;
}
