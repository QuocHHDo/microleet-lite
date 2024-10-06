'use client';
import React from 'react';
import Head from 'next/head';

const ComingSoonPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-100 flex flex-col">
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Coming Soon</h2>
            <p className="text-gray-600 mb-6 text-center">
              We&apos;re working hard to bring you an amazing learning
              experience. Stay tuned!
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ComingSoonPage;
