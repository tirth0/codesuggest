import React, { Component } from 'react';
import './CodeCard.css';
import PropTypes from 'prop-types';

class CodeCard extends Component {
    render() {
        let tags = this.props.tags.map((tag,ind) => (
            <li key={ind}>{tag}</li>
        ));
        return (
            <div className="container-card">
                <div className="heading-card">
                    <h3 className="primary-text">{this.props.name}</h3>
                    <hr/>
                    <h2 className="secondary-text">url</h2>
                </div>
                <div className="tags">
                    <h2>Tags:</h2>
                    <ul>
                        {tags}
                    </ul>
                </div>
                <h1>{this.props.difficulty}</h1>
            </div>
        );
    }
}

CodeCard.propTypes = {
    name : PropTypes.string.isRequired,
    tags : PropTypes.arrayOf(PropTypes.string).isRequired,
    difficulty : PropTypes.number
};

export default CodeCard;