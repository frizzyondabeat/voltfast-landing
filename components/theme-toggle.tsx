'use client';

import { Moon, Sun } from '@phosphor-icons/react';
import { Button } from 'components/ui/button';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="bg-background relative dark:border-white/10 dark:bg-[#1c1b1b]"
    >
      <Sun
        className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        weight="bold"
      />
      <Moon
        className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        weight="bold"
      />
    </Button>
  );
}
