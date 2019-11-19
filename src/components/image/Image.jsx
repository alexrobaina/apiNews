import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, styles }) => {
    return (
        <img className={styles} src={src} alt={alt} />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Image;
