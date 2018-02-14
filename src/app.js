import React, { Component } from 'react';
import { render } from 'react-dom';

import RecipeSearch from './components/recipe-search';

class RecipeApp extends Component {
    render() {
        return (
            <div>
                <h1>Search</h1>
                <RecipeSearch />
            </div>
        );
    }
}

render(<RecipeApp />, document.getElementById('app'));