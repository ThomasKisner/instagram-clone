import React, { Component } from "react";
import "./App.css";
import PostsPage from "./Components/PostsContainer/PostsPage";
import Authenticate from "./Components/Authentication/Authenticate";



class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };

  }
  render() {
    return (
      <PostsPage
        searchTerm={this.state.searchTerm}
        searchPosts={this.searchPostsHandler}
        filteredPosts={this.state.filteredPosts}
        posts={this.state.posts}
      />
    );
  }
}

export default App;
