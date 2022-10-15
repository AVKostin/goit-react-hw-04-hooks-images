import PropTypes from "prop-types";
import { Button } from "./Button.styled";

const BtnLoadMore = ({ incrementPage }) => (
    <Button type="button" onClick={incrementPage}>
        load more
    </Button>
);
export default BtnLoadMore;

BtnLoadMore.propTypes = {
    incrementPage: PropTypes.func.isRequired,
};
