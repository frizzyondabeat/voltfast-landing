import { useEffect, useState } from 'react';

type Item = { href: string };

export function useActiveSection(items: Item[]) {
  const [activeId, setActiveId] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: [0.1, 0.5, 1],
      }
    );

    const elements = items
      .map((item) => {
        const id = item.href.split('#')[1];
        return document.getElementById(id);
      })
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  return { activeId, setActiveId };
}
