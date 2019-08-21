import React, { Component } from 'react';
//import '.SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchInput extends Component {
    render() {
        return (
            <div className="SearchInput">
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder="Search term" value={this.props.searchTerm}/>
            </div>
        );
    }
}

export default SearchInput;