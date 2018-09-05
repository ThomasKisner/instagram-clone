import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input  type="text" 
              placeholder="Add comment... " 
              onChange={props.handleInput}
              value={props.comment} />
    </form>
  );
};

export default CommentInput;
