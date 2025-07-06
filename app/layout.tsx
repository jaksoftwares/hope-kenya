import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HopeKenya - Empowering Education for Children in Kenya',
  description: 'Join us in transforming lives through education. Help provide quality education to underprivileged children in Kenya and make a lasting impact.',
  keywords: 'charity, education, Kenya, children, donation, sponsorship, hope',
  openGraph: {
    title: 'HopeKenya - Empowering Education for Children in Kenya',
    description: 'Join us in transforming lives through education. Help provide quality education to underprivileged children in Kenya.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}