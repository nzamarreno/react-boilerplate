import { IResponse } from '../../saga/beerSaga';
import { TYPES } from '../types';

export interface IFetch {
    type: TYPES.FETCH;
    payload: string;
}

export interface IDisplay {
    type: TYPES.DISPLAY;
    payload: IResponse[];
}

export const fetch = (payload: string): IFetch => ({
  type: TYPES.FETCH,
  payload,
});

export const displayBeers = (payload): IDisplay => ({
  type: TYPES.DISPLAY,
  payload,
});

export type Actions = IFetch | IDisplay;
