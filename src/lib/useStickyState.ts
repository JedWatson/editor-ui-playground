import { useEffect, useState } from 'react';

export function useStickyState(defaultValue: any, key: string) {
  const [value, setValue] = useState(() => {
    if (typeof localStorage === 'undefined') return defaultValue;
    const stickyValue = localStorage.getItem(key);
    return stickyValue !== null &&
      typeof stickyValue === 'string' &&
      stickyValue !== 'undefined'
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
