import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Filter } from '../../components/Filter';
import { FilterConstants } from './contants';

const Search = () => {
  const [animate, setAnimate] = React.useState<boolean>(false);
  const beers = useSelector((state: any) => state.beers);
  const { term } = useParams();
  const navigate = useNavigate();

  const handleOnClickReturn = React.useCallback(() => {
    navigate('/');
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  const coverList = ['search'];
  if (animate) coverList.push('--animate');

  return (
    <div className={coverList.join(' ')}>
      <div className="search-panel">
        <div className="search-panel__wrapper">
          <div className="search-panel__return">
            <button onClick={handleOnClickReturn} type="button" className="button button--shadow">
              <i className="las la-undo" />
              Return
            </button>
          </div>
          <div className="search-panel__term">
            {term}
          </div>
          <Filter items={FilterConstants} />
          <ul className="search-list">
            {beers && beers.map((beer) => (
              <li key={beer.id} className="search-item">
                <div className="search-list__cover">
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="search-list__desc">
                  <div className="search-list__header">
                    <h3 className="search-item__title">{beer.name}</h3>
                    <b className="search-item__tagline">{beer.tagline}</b>
                  </div>

                  <ul className="search-list__kpi">
                    <li>
                      <i className="las la-beer" />
                      {beer.volume.value}
                    </li>
                    <li>
                      <i className="las la-vial" />
                      {beer.ph}
                    </li>
                    <li>
                      <i className="las la-brain" />
                      {beer.abv}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img alt="Search Cover" className="search__cover" src="/assets/images/cover.jpeg" />
      <div className="search__mask" />
    </div>
  );
};

export default Search;
