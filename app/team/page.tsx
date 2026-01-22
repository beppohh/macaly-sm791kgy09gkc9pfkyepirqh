import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import TeamPageContent from '@/components/team-page-content';

export const metadata: Metadata = siteMetadata['/team'];

export default function TeamPage() {
  return <TeamPageContent />;
}
