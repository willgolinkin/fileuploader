import React, { Component } from 'react';
//import './SearchBar.css';
import SearchInput from './SearchInput/SearchInput';
import FilterOptions from './FilterOptions/FilterOptions';

class SearchBar extends Component {
    render() {        
        return (
            <div className="SearchInput">
                <div className="SearchInput__heading">
                    <h1>File Uploader</h1>
                </div>
                <div className="SearchInput__controls">
                    <SearchInput 
                        searchTerm={this.props.searchTerm}
                        handleUpdate={this.props.handleUpdate}
                    />
                    <FilterOptions
                        filterOption={this.props.filterOption}
                        handleFilterChange={this.props.handleFilterChange}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;