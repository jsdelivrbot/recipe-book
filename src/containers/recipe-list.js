import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';

class RecipeList extends Component {
  renderList() {
    return this.props.recipes.map(recipe => {
      return (
        <li
          className="list-group-item"
          key={recipe.title}
          onClick={() => this.props.selectRecipe(recipe)}
        >
          {recipe.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

// Anything returned from this function will end up as props on the RecipeList container
function mapDispatchToProps(dispatch) {
  // Whenever selectRecipe is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectRecipe: selectRecipe }, dispatch);
}

// Promote component to container - it needs to know this new dispatch method, selectRecipe. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
