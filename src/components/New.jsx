import React from 'react';
import Card from './card/Card';
import noImage from '../assets/no-image-available-icon-6.jpg'
import PropTypes from 'prop-types';

const New = ({ news }) => {
    return (
        <>
            {
                news.map((item => {
                    return (
                        <div key={item.url} className="padding-card">
                            <Card
                                urlToImage={item.urlToImage ? item.urlToImage : noImage}
                                url={item.url}
                                title={item.title}
                                description={item.description}
                                source={item.source}
                            />
                        </div>
                    )
                }))
            }
        </>
    );
};

Card.propTypes = {
    news: PropTypes.object
};

export default New;