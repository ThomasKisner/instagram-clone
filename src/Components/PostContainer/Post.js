import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import './Posts.css';

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
       <span>{props.post.likes}</span>
       <button onClick={props.likePost}>Like</button>
        
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
