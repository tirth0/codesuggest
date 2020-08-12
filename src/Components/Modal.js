import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';


class Modal extends Component {
    render() {
        return (
            <div className={this.props.isOpen? 'modal' : 'noDisp'}>
                    <div className="tag-list">
                    <input type="checkbox" class="tags" name="tag1" value="greedy"/>
                    <label for="tag1">Greedy</label><br/>
                    <input type="checkbox" class="tags" name="tag1" value="implementation"/>
                    <label for="tag1">Implementation</label><br/>
                    <input type="checkbox" class="tags" name="tag1" value="binary-search"/>
                    <label for="tag1">Binary Search</label><br/>
                    <input type="checkbox" class="tags" name="tag1" value="data-structures"/>
                    <label for="tag1">Data Structures</label><br/>
                    <input type="checkbox" class="tags" name="tag1" value="greedy"/>
                    <label for="tag1">Greedy</label><br/>
                    <input type="checkbox" class="tags" name="tag1" value="greedy"/>
                    <label for="tag1">Greedy</label><br/>
                    <input type="checkbox" class="tags" name="tag1" value="greedy"/>
                    <label for="tag1">Greedy</label><br/>
                </div>
                <button 
                className="close"
                onClick = {this.props.onClick}
                >
                    Close
                </button>
            </div>
        );
    }
}

Modal.propTypes = {
    onClick : PropTypes.func.isRequired
};

export default Modal;