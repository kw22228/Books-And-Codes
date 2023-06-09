import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentClass extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        나의 이름은 {name}입니다. <br />
        Children 값은 {children} <br />
        제가 좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

// MyComponentClass.defaultProps = {
//   name: '기본 이름',
// };

// MyComponentClass.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponentClass;
