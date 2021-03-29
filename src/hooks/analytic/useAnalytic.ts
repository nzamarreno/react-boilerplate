import * as React from 'react';

export const useAnalytic = () => {
  const [clicks, setClicks] = React.useState<number>(0);

  const clickOnPage = React.useCallback(() => {
    setClicks((state) => state + 1);
  }, []);

  return {
    clicks,
    clickOnPage,
  };
};
