import React from "react";
import PostsContainer from "./PostsContainer";
import SearchBar from "../SearchBar/SearchBarContainer";
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        filteredPosts: [],
    };
  }
  
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = e => {
    // eslint-disable-next-line
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };


  render() {
    return (
        <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.state.searchPostsHandler}
        />
        
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0 
            ? this.state.filteredPosts 
            : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
