import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BsFillSkipForwardFill as Front} from 'react-icons/bs';
import {BsFillSkipBackwardFill as Back } from 'react-icons/bs';
import './Slider.css'; 

class Slider extends Component {
    
    render() {
        let style = {color : 'white'};
        let slider = this.props.pages.map((elem,ind)=>(
            <li
            className="slide"
            onClick = {(e) => (this.props.handleSlide(elem))}
            key={ind}
            style = {style}
            value={elem}
            >
                <button className="slide-button">{elem}</button>
            </li>
        ));
        return (
            <div className="slider">
                <ul>
                    <li className="slide"><button className="slide-button"><Back/></button></li>
                    {slider}
                    <li className="slide"><button className="slide-button"><Front/></button></li>
                </ul>
            </div>
        );
    }
}

Slider.propTypes = {
    pages : PropTypes.arrayOf(PropTypes.number).isRequired,
    handleSlide : PropTypes.func.isRequired
};

export default Slider;