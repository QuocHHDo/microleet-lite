import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number; // Define the 'count' prop with a default value
}

function Skeleton({ className, count = 1, ...props }: SkeletonProps) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={cn('animate-pulse rounded-md bg-primary/10', className)}
          {...props}
        />
      ))}
    </>
  );
}

export { Skeleton };
