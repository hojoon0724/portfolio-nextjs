import { useEffect } from 'react';

function ScrollListener({ onScroll }) {
  useEffect(() => {
    const handleScroll = () => {
      // Trigger the provided callback with scroll details
      onScroll({ scrollTop: window.pageYOffset });
      console.log('onScroll function');
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // This component doesn't render any JSX
}

export default ScrollListener;
