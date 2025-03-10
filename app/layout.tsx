// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ezra Meeker\'s Oregon Trail Adventure',
  description: 'A challenging 8-bit Oregon Trail game with mini-games and survival mechanics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#2E8B57', margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
