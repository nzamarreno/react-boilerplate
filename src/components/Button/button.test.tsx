import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toHaveNoViolations, configureAxe } from 'jest-axe';
import { Button } from '.';

const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Click Function is triggered', () => {
    const TEXT = 'Click Me';
    const onClickMockFuction = jest.fn();
    const { getByText } = render(<Button onClick={onClickMockFuction}>{TEXT}</Button>);

    fireEvent.click(getByText(TEXT));
    expect(onClickMockFuction).toBeCalled();
  });

  it('Change Tag', () => {
    const { container } = render(<Button as="a">Click Me</Button>);
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('Test Accessibility', async () => {
    const { container } = render(<Button>Click Me</Button>);

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
