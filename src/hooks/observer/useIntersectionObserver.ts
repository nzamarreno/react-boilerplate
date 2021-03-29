import 'intersection-observer';
import * as React from 'react';

export const useIntersectionObserver = (
  observerCallback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) => {
  let observer: IntersectionObserver | null = null;

  React.useEffect(() => {
    const observableSetting = options || {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    observer = new IntersectionObserver(
      observerCallback,
      observableSetting,
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    observer,
  };
};
