'use client';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ErrorBoundary from '../components/ErrorBoundary';
import { initializeMigration } from '../utils/migrateLocalStorage';
import '../styles/globals.css';

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
    <html lang="en">
      <body>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
