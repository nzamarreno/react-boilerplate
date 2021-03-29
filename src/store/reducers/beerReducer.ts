import { TYPES } from '../types';
import { Actions } from '../actions/beerAction';

const initialState = {
  beers: [],
};

export function reducers(state = initialState, action: Actions) {
  switch (action.type) {
    case TYPES.DISPLAY:
      return {
        ...state,
        beers: action.payload,
      };
    default:
      return state;
  }
}
