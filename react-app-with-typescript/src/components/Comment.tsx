// Comment.tsx
import React from 'react';

//Interfaz con las propiedades
interface CommentProps {
  content: string;
}

const Comment: React.FC<CommentProps> = ({ content }) => {
  //Estructura del comentario
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;