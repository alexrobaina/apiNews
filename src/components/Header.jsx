import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <nav className="navbar">
    <p className="title">{title}</p>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
