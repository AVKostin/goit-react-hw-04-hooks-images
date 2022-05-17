import { Button } from './Button.styled';
import PropTypes from 'prop-types';

const BtnLoadMore = ({ incrementPage }) => (
  <Button type="button" onClick={incrementPage}>
    load more
  </Button>
);

export default BtnLoadMore;

BtnLoadMore.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
