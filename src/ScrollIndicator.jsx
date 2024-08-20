import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
   
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-200 h-1 z-50">
      <div
        className="bg-green-600 h-full"
        style={{ width: `${scrollWidth}%`, transition: 'width 0.25s ease-out' }}
      />
    </div>
  );
};

export default ScrollIndicator;
