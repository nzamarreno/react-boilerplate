import * as React from 'react';

export interface IButton {
    onClick?: () => void;
    as?: string;
    className?: string;
    fill?: boolean;
}

export const Button: React.FC<IButton> = ({
  onClick, as, children, className, fill,
}) => {
  const handleOnClick = React.useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  const Component = `${as || 'button'}` as keyof JSX.IntrinsicElements;
  const classList = ['button'];
  if (className) classList.push(className);
  if (fill) classList.push('button--fill');

  return (
    <Component className={classList.join(' ')} onClick={handleOnClick}>
      {children}
    </Component>
  );
};
