// Comment.tsx
import React from 'react';

interface CommentProps {
  content: string;
}

const Comment: React.FC<CommentProps> = ({ content }) => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;