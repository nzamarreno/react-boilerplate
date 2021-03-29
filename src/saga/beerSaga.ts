import { call, put, takeEvery } from 'redux-saga/effects';
import { displayBeers } from '../store/actions/beerAction';
import { TYPES } from '../store/types';

export interface IResponse {
    id: number;
    name: string;
    tagline: string;
    description: string;
    // eslint-disable-next-line camelcase
    image_url: string;
    volume: {value: number, unit: string};
    abv: number;
}

async function beerApi(name: string) {
  return fetch(`https://api.punkapi.com/v2/beers?food=${name}&page=1&per_page=10`)
    .then((reponse) => reponse.json())
    .then((response) => response);
}

function* fetchBeers(action) {
  try {
    const beers = yield call(beerApi, action.payload);
    yield put(displayBeers(beers));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export function* mySaga() {
  yield takeEvery(TYPES.FETCH, fetchBeers);
}
