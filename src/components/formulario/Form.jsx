import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    render() {
        let { handleSelect } = this.props;
        return (
            <div className="col-12">
                <form>
                    <h2>Search for category</h2>
                    <select onChange={handleSelect("category")} className="select">
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="sport">Sport</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                    </select>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    category: PropTypes.string
}

export default Form;