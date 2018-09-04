import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input type="text" placeholder="Add comment... " onChange={props.handleInput} />
    </form>
  );
};

export default CommentInput;
