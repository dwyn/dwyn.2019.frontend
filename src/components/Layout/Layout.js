import React, { Component } from 'react';
import { connect } from 'react-redux'; //connects components to redux store!

import classes from './Layout.css';
import { fetchPosts } from '../../store/actions/postActions'; //importing fetchPosts action!
import PostPreview from '../Post/PostPreview'; //importing PostPreview component!
import { App } from '../containers/App'; //importing PostPreview component!


class Layout extends Component {
  componentWillMount() {
    this.props.fetchPosts(); //fetch request via imported action!
  }

  render() {
    return (
      <PostPreview />
    )
  }
}

const mapStateToProps = (state) => {
  // posts: state.posts.items
}


// export default Layout;
export default connect(mapStateToProps)(Layout);





// const mapDispatchToProps = 
// import Aux from '../../hoc/Aux';
// import Toolbar from '../Navigation/Toolbar/Toolbar';