'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';

// Safe error logger to prevent syntax issues
const safeConsoleError = (message: string) => {
  try {
    console.error(message.replace(/`/g, '"'));
  } catch (e) {
    console.error('Progress component validation error');
  }
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max = 100, ...props }, ref) => {
  // Validate max prop
  if (typeof max !== 'number' || max <= 0) {
    safeConsoleError(`Invalid prop max of value ${max} supplied to Progress. Using default 100.`);
    max = 100;
  }

  // Validate value prop
  let safeValue = 0;
  if (typeof value === 'number') {
    if (value < 0) {
      safeConsoleError(`Invalid prop value of value ${value} supplied to Progress. Using 0.`);
      safeValue = 0;
    } else {
      safeValue = Math.min(value, max);
    }
  }

  const percentage = Math.max(0, Math.min(100, (safeValue / max) * 100));
  const translateX = 100 - percentage;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        className
      )}
      value={safeValue}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${translateX}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = 'Progress';

export { Progress };