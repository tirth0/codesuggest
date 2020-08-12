import React, { Component } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
class Navbar extends Component {

    render() {
        return (
            <div>
                <header className="fixed-header">
                <h3>CodeSuggest</h3>
                <nav className="navigation">
                    <ul>
                        <li className="nav-button">
                            <button
                            onClick = {this.props.onClick}
                            >
                                Filter
                            </button>
                        </li>
                        <li className="nav-button"><button>Random</button></li>
                        <li className="nav-button"><button>Sign Up</button></li>
                    </ul>
                </nav>
                </header>
                <div className="space"></div>
            </div>
            
            
        );
    }
}

Navbar.propTypes = {
    onClick : PropTypes.func.isRequired
}

export default Navbar;