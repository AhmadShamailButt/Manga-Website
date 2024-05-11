import React from 'react';
import '../style/comments.css';  // Ensure the CSS file is correctly linked

const Comment = ({ user, comment}) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{user}</h5>
      <p className="card-text">{comment}</p>
      <hr />
     
    </div>
  </div>
);

const Comments = () => {
  const commentsData = [
    { user: "FirstUser", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    { user: "SecondUser", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    { user: "ThirdUser", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    { user: "ThirdUser", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." }
  ];

  return (
    <div className="page-width container pt-3">
      <h3>Comments</h3>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Leave a comment</h5>
          <hr />
          <form>
            <div className=" form-group">
              <textarea rows="3" className="input-comment form-control bg-light" placeholder="Enter your comment here..." style={{ resize: 'none' }}></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">Comment</button>
          </form>
        </div>
      </div>

      {commentsData.map((data, index) => (
        <Comment key={index} {...data} />
      ))}
    </div>
  );
};

export default Comments;
