import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../containers/search-bar';
import ResultsList from '../containers/results-list';

const APP_ID = '11a45b9f';
const API_KEY = 'e467762dfe989cad5a758eb06ae5caf8';
const API_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&`;

class RecipeSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    onSearchSubmit(term) {
        const search_term = encodeURIComponent(term.trim());

        axios.get(API_URL + `q=${search_term}`)
            .then(response => {
                console.log(response);
                this.setState((state, props) => {
                    return { results: response.data.hits }
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div id="RecipeContainer">
                <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
                <ResultsList results={this.state.results} />
            </div>
        );
    }
}

export default RecipeSearch;