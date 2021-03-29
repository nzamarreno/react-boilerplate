import { renderHook, act } from '@testing-library/react-hooks';
import { useAnalytic } from './useAnalytic';

test('should analytic return number clicks', () => {
  const { result } = renderHook(() => useAnalytic());

  act(() => {
    result.current.clickOnPage();
  });

  expect(result.current.clicks).toBe(1);
});
