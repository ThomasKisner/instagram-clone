import React from 'react';
import './Posts.css';
import styled from "styled-components";

const PostHeaderDiv = styled.div`
display: flex;
    align-items:center;
`;

const PostThumb = styled.img`
height: 100%;
    border-radius: 50%;
`;

const PostThumbWrapper = styled.div`
height: 50px;
width: 50px;
margin-right: 20px;
`;


const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderDiv>
  );
};

export default PostHeader;
