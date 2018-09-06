import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import styled from "styled-components";

import "./Posts.css";

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 5px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImageWrapper = styled.div`
height: 100%;
    width: 100%;
`;

const PostImage = styled.img`
width: 100%;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    console.log("increment clicked");
    let newLikes = this.state.likes + 1;
    this.setState({ likes: newLikes });
  };

  render() {
    return (
      <PostBorder>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <PostImageWrapper>
          <PostImage
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </PostImageWrapper>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </PostBorder>
    );
  }
}

export default Post;
