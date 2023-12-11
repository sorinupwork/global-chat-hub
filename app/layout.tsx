import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import ClientProviders from '@/components/ClientProviders';
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider';
import SubscriptionProvider from '@/components/SubscriptionProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Global Chat Hub',
  description:
    'Global Chat Hub is a cutting-edge Software as a Service (SaaS) platform designed to revolutionize communication by seamlessly breaking down language barriers. This innovative platform serves as a universal meeting point for individuals and businesses worldwide, offering a comprehensive chat translation feature that facilitates smooth and effective conversations in any language.',
  authors: [{ name: 'Sorin C Adam', url: 'https://sorin-adam.netlify.app' }],
  keywords: [
    'global',
    'chat',
    'hub',
    'translation',
    'ai',
    'SaaS',
    'communication',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className={inter.className}>
          <Head>
            <meta
              property="og:image"
              content={'https://i.ibb.co/wzJLQmx/global-chat-hub.png' || ''}
            />
          </Head>
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />

                {children}

                <Toaster />
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
