import * as React from 'react';
import { Button } from '../Button';

export type IFilterItem = {
    id: number;
    label: string;
    onClick: () => void;
}

export interface IFilter {
    items: IFilterItem[]
}

export const Filter: React.FC<IFilter> = ({ items }) => (
  <div className="filter">
    <p className="filter__title">Filters:</p>
    <div className="filter__actions">
      {items.map((item) => (
        <Button key={item.id} onClick={item.onClick}>{item.label}</Button>
      ))}
    </div>
  </div>
);
