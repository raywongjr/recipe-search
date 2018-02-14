import React, { Component } from 'react';

class ResultsList extends Component {
    DisplayResults() {
        return this.props.results.map((hit) => {
            const recipe = hit.recipe;

            return (
                <div key={recipe.uri}>
                    {recipe.label} by {recipe.source}
                </div>
            )
        });
    }

    render() {
        if (this.props.results.length > 0) {
            return (
                <div>
                    {this.DisplayResults()}
                </div>
            );
        } else {
            return (
                <div>
                    No Results
                </div>
            )
        }
    }
}

export default ResultsList;