'use client';
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import ErrorBoundary from '../components/ErrorBoundary';
import { initializeMigration } from '../utils/migrateLocalStorage';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize localStorage migration on mount
  useEffect(() => {
    initializeMigration();
  }, []);

  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
