import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

import './Posts.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
    };
  }

  incrementLike = () => {
    console.log('increment clicked')
    let newLikes = this.state.likes +1;
    this.setState({likes: newLikes});
  };
 

  render(){
  return (
    <div className="post-border">
    <PostHeader
      username={this.props.post.username}
      thumbnailUrl={this.props.post.thumbnailUrl}
    />
    <div className="post-image-wrapper">
      <img
        alt="post thumbnail"
        className="post-image"
        src={this.props.post.imageUrl}
      />
    </div>
    <LikeSection
      incrementLike={this.incrementLike}
      likes={this.state.likes}
    />
    <CommentSection
      postId={this.props.post.imageUrl}
      comments={this.props.post.comments}
    />
  </div>
  );
};
}

export default Post;