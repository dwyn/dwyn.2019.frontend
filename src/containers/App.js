import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import PostContainer from '../containers/PostContainer';

class App extends Component {
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </div>
    ));

    return (
      <div className="App">
        {/* <Layout>
          <Switch>
            <Route path="/Post" component={PostContainer} /> 
            <Route path="/" exact component={LandingPage} /> 
          </Switch>
        </Layout> */}
      </div>
    );
  }
}

export default App;
