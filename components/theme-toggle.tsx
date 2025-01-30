'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Varmistetaan, ettei palauteta virheellistä tilaa
  if (!mounted || !resolvedTheme) return null;

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="w-4 h-4 text-yellow-400" />
      ) : (
        <MoonIcon className="w-4 h-4 text-blue-400" />
      )}
      
      {/* Ruudunlukuohjelmille */}
      <span className="sr-only">
        {resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode
      </span>
    </Button>
  );
}
