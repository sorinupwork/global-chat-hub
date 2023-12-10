'use client';

import { useEffect } from 'react';

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarHeight = 154;

  useEffect(() => {
    const setMinHeight = () => {
      const windowHeight = window.innerHeight;
      const newMinHeight = windowHeight - navbarHeight;
      document.documentElement.style.setProperty(
        '--min-height',
        `${newMinHeight}px`
      );
    };

    setMinHeight();

    // Update min-height when the window is resized
    window.addEventListener('resize', setMinHeight);

    return () => {
      window.removeEventListener('resize', setMinHeight);
    };
  }, [navbarHeight]);
  return (
    <div className="flex-1 w-full flex flex-col max-w-6xl mx-auto">
      {children}
    </div>
  );
}
