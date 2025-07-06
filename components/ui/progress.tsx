'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    // Input validation
    const validatedMax = typeof max === 'number' && max > 0 ? max : 100;
    const numericValue = typeof value === 'number' ? value : 0;
    const clampedValue = Math.max(0, Math.min(numericValue, validatedMax));
    const percentage = (clampedValue / validatedMax) * 100;

    return (
      <div
        ref={ref}
        className={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
          className
        )}
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ 
            width: `${percentage}%`,
            transform: `translateX(-${100 - percentage}%)` 
          }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };