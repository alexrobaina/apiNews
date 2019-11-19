import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ style, type, text }) => {
    return (
        <button className={style} type={type}>{text}</button>
    )
};

Button.propTypes = {
    classname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Button;