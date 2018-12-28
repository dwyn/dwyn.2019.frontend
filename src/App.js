import React, { Component } from 'react';
import './App.css';
import PostPreview from "./Post/PostPreview"

class App extends Component {
  render() {
    return (
      <div className="App">

        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </div>
    );
  }
}

export default App;
