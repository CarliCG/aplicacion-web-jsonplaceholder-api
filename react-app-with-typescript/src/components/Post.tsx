// Post.tsx
import React from 'react';
import Comment from './Comment';

interface PostProps {
  postContent: string;
  comments: string[];
}

const Post: React.FC<PostProps> = ({ postContent, comments }) => {
  return (
    <div>
      <p>{postContent}</p>
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;