import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useAnalytic } from '../../hooks/analytic/useAnalytic';
import { IResponse } from '../../saga/beerSaga';
import { fetch } from '../../store/actions/beerAction';
import { Input } from '../../components/Input';

interface IHome {
    beers: IResponse[];
    onFetch: (name: string) => void;
}

const Home: React.FC<IHome> = ({ beers, onFetch }) => {
  useAnalytic();
  const navigate = useNavigate();

  const [animate, setAnimate] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');

  // eslint-disable-next-line max-len
  const handleOnChangeInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    }, [],
  );

  const handleOnFetch = React.useCallback(
    () => {
      onFetch(search);
      setAnimate(false);
      setTimeout(() => navigate(`/search/${search}`), 1000);
    }, [search],
  );

  React.useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const coverList = ['main'];
  if (animate) coverList.push('--animate');

  return (
    <main className={coverList.join(' ')}>
      <div className="container">
        <div className="desc">
          <div className="content">
            <h1 className="title">
              <span className="title__mask">
                <strong className="title__content">
                  What do you
                </strong>
              </span>
              <span className="title__mask color--primary">
                <strong className="title__content">
                  drink today?
                </strong>
              </span>
            </h1>
            <div className="field">
              <Input type="text" placeholder="Tap your meal" id="search" className="field__input" value={search} onChange={handleOnChangeInput} />
              <Button fill onClick={handleOnFetch}>
                Search!
              </Button>
            </div>
          </div>
        </div>
        <div className="cover">
          <span className="cover__mask" />
          <img className="cover__picture" src="./assets/images/welcome.jpg" alt="Welcome" />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  beers: state.beers,
});

const mapDispatchToProps = (dispatch) => ({
  onFetch: (max: string) => dispatch(fetch(max)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
