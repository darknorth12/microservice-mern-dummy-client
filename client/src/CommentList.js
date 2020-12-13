import React from "react";

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    let content;

    switch (comment.status) {
      case "accepted":
        content = comment.content;
        break;
      case "pending":
        content = "This comment is pending in moderation";
        break;
      case "rejected":
        content = "This comment has been rejected";
        break;
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderComments}</ul>;
};

export default CommentList;
