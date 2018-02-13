import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import ResultsList from '../containers/results-list';

class RecipeSearch extends Component {
    render() {
        return (
            <div id="RecipeContainer">
                <SearchBar />
                <ResultsList />
            </div>
        );
    }
}

export default RecipeSearch;