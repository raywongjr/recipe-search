import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onSearchBarChange(e) {
        const term = e.target.value;

        this.setState((state, props) => {
            return { term: term }
        });
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text"
                    placeholder="Search for Recipes"
                    onChange={this.onSearchBarChange.bind(this)}
                    value={this.state.term} />
                <button onClick={() => this.props.onSubmit(this.state.term)}>Search</button>
            </div>
        );
    }
}

export default SearchBar;