import PropTypes from 'prop-types';

const Button = ({ onBtnClick }) => {
  return (
    <button
      type="button"
      onClick={onBtnClick}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;