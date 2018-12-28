import React, { Component } from 'react';
import './App.css';
Import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Navigation from "../components/NavBar/NavBar"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import Footer from "../components/Footer/Footer"
import PostPreview from "../components/Post/PostPreview"
import PostForm from '../components/Post/PostForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({posts: data}));
  }


  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </div>
    ));

    return (
      <Provider store={store}>
        <div className="App">
          <PostForm/>
          {/* {postItems} */}
          <Navigation/>
          <Header/>
          <Menu/>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
