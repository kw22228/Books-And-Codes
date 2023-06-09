import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => (
  <div>
    나의 이름은 {name}입니다. <br />
    Children 값은 {children} <br />
    제가 좋아하는 숫자는 {favoriteNumber}
  </div>
);

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
