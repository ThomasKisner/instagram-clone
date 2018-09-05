import React from 'react';

const LikeSection = (props) => {
    return (
        <div className="like-section" onClick={props.incrementLike}>
        <span>{props.likes}</span>      
        <button >Like</button>    
        </div>
      );
    };

    export default LikeSection;