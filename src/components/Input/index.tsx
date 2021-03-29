import * as React from 'react';

interface IInput {
    id: string;
    type?: string;
    value: string;
    placeholder?: string;
    name?: string;
    label?: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = ({
  id,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => (
  <label htmlFor="email">
    {label}
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  </label>
);
