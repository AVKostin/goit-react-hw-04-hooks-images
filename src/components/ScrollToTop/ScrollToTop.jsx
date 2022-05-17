import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../../img/logo.svg';

const ScrollOnTop = () => {
  return (
    <div>
      <button type="button">
        <ScrollToTop smooth component={<MySVG />} />
      </button>
    </div>
  );
};

export default ScrollOnTop;
