import type { Metadata } from 'next';
import '@styles/globals.scss';

export const metadata: Metadata = {
  title: 'Dog Breed Viewer',
  description: 'Browse various dog breeds and their images.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
