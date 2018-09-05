import React from "react";
import Post from "./Post";
import "./Posts.css";

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount(){
    this.setState({
      posts: this.props.posts
    });
   }
  
 
  render() {
    return (
      
      <div className="posts-container-wrapper">
       {console.log(this.state.posts)}
        {this.state.posts.map(post => (<Post key={post.imageUrl} post={post} />))}
      </div>
    );
  };
};

export default PostsContainer;
