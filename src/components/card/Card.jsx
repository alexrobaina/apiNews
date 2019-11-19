import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/Image';
import './card.css';

const Card = ({ urlToImage, title, description, source }) => {
    return (
        <div className="card-news shadows">
            <Image styles={'img-news'} src={urlToImage} alt={title} />
            <p className="title-card">{title}</p> 
            <p className="description">{description.substring(0, 100)}...</p>
            <div className="action">
                <button className="btn-card">more...</button>
            </div>
            <p className="source">Source: {source.name}</p>
        </div>
    );
};

Card.propTypes = {
    urlToImage: PropTypes.string = '',
    title: PropTypes.string = '',
    description: PropTypes.string = '',
    source: PropTypes.string = ''
};

export default Card;