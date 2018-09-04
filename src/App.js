import React, { Component } from 'react';

import './App.css';
import SearchBar from './Components/SearchBar/SearchBarContainer';
import dummyData from './dummy-data.js';
import PostContainer from './Components/PostContainer/PostsContainer';



class App extends Component {
  constructor(){
    super();
    this.state = {
        posts: []
    };
}

componentDidMount(){
  this.setState({
    posts: dummyData
  });
} 
  render() {
       return (
      <div className="App">
      <SearchBar />
          <PostContainer posts={this.state.posts} />
      </div>
       
    );
  }
}

export default App;
