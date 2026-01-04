import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function OOPLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section Skeleton */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-16 w-96 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-[500px] mx-auto bg-white/10" />
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="flex-1 py-16 px-6 sm:px-8 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="p-6">
                <div className="flex items-center gap-5 mb-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-2 w-full mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Skeleton key={j} className="h-12 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
