import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Like from '../PostContainer/LikeSection';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
  
    };
  }

  handleInput = event => {
    this.setState({
      comment: event.target.value,
    });
  }


  //Create a function in CommentSection.js called addNewComment that takes in an event and an index number. The  
  //function will add the comment that is on the event object to the post that is at that index number.
  addNewComment = (event) => {
    if(this.state.comment){
    event.preventDefault();
    const addedComment = {text: this.state.comment, username: 'Doug'};
    const comments = [...this.state.comments];
    comments.push(addedComment);
    this.setState({comments: comments, comment: ''});
    };
  }
  

  render() {
    return (
      <div>
        
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          comment={this.state.comment} 
          handleInput={this.handleInput} 
          addNewComment={this.addNewComment}/>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
