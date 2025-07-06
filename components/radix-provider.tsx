// components/radix-provider.tsx
'use client';
import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function RadixProvider({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Root>
      {children}
    </DropdownMenu.Root>
  );
}