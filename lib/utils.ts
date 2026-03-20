import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getLatestVersion() {
  try {
    const res = await fetch(
      'https://registry.npmjs.org/@frizzyondabeat/volt-fast/latest',
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return '0.1.0';
    }

    const data = await res.json();
    return data.version || '0.1.0';
  } catch (error) {
    return '0.1.0';
  }
}
