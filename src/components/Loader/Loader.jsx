import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Circles height="80" width="80" color="#4d78a9" wrapperClass={css.loader} />
  );
};

export default Loader;
