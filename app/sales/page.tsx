import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import SalesPageContent from '@/components/sales-page-content';

export const metadata: Metadata = siteMetadata['/sales'];

export default function SalesPage() {
  return <SalesPageContent />;
}
