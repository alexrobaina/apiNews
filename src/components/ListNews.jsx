import React from 'react';
import New from './New';
import PropTypes from 'prop-types';


const ListNews = ({ news }) => (
    <div className="container-news">
        <div className="row">
            <New
                news={news}
            />
        </div>
    </div>
)

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;