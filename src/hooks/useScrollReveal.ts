import { useEffect, useRef } from 'react';

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export const useScrollReveal = (options: RevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (currentElement) {
      const makeVisible = () => {
        currentElement.classList.add('is-visible');
      };

      if (typeof window === 'undefined') {
        makeVisible();
        return;
      }

      if (!('IntersectionObserver' in window)) {
        makeVisible();
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('is-visible');
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(currentElement);

      const rect = currentElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        makeVisible();
        if (triggerOnce) {
          observer.unobserve(currentElement);
        }
      }

      return () => {
        observer.unobserve(currentElement);
      };
    }

    return undefined;
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};
