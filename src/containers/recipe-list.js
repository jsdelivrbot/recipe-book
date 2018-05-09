import React, { Component } from 'react';

export default class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map(recipe => {
      return (
        <li className="list-group-item" key={recipe.title}>
          {recipe.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList}</ul>;
  }
}
