import React from "react";
import Post from "./Post";
import "./Posts.css";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostsContainerWrapper = styled.div`
  height: 500px;
  width: 50%;
  margin: 5px auto;
`;

const PostsContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </PostsContainerWrapper>
  );
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.string,
      timestamp: PropTypes.string,
      comment: PropTypes.arrayOf(PropTypes.objects)
    })
  )
};

export default PostsContainer;
