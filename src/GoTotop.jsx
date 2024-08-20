import { useState, useEffect } from 'react';
import { BiLogoUpwork } from 'react-icons/bi';

const GoTotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={goTotop}
      className={`fixed bottom-8 right-4 p-2 bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110
        ${isVisible ? 'block' : 'hidden'}
      `}
      aria-label="Go to top"
    >
      <BiLogoUpwork className="lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4   animate-bounce" />
    </button>
  );
};

export default GoTotop;
