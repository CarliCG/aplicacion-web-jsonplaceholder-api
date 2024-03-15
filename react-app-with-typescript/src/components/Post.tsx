import React, { useState } from 'react';
import Comment from './Comment';
import './post.css';

interface PostProps {
  postContent: string;
  comments: string[];
}

const Post: React.FC<PostProps> = ({ postContent, comments }) => {
  const [areCommentsVisible, setAreCommentsVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(postContent);
  const [currentPostContent, setCurrentPostContent] = useState<string>(postContent);

  const toggleCommentsVisibility = () => {
    setAreCommentsVisible(!areCommentsVisible);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setCurrentPostContent(editedContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmed = window.confirm("¿Estás seguro de borrar este post?");
    if (confirmed) {
      // Borrar el post (aquí puedes añadir la lógica para borrar el post)
      console.log("Post borrado");
    }
  };

  return (
    <div className="post-container">
      {/* Contenido del post */}
      <div className="post-content-container">
        {isEditing ? (
          <textarea 
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p className="post-content">{currentPostContent}</p>
        )}
      </div>

      {/* Botones de editar y borrar */}
      <div className="buttons-container">
        {isEditing ? (
          <button className="btn btn-success mr-2" onClick={handleSave}>Guardar</button>
        ) : (
          <>
            <button className="btn btn-secondary mr-2" onClick={handleEdit}>Editar</button>
            <button className="btn btn-danger" onClick={handleDelete}>Borrar</button>
          </>
        )}
      </div>

      {/* Botón para ver/ocultar comentarios */}
      <button 
        className="btn btn-primary mt-2"
        onClick={toggleCommentsVisibility}
      >
        {areCommentsVisible ? "Ocultar comentarios" : "Ver comentarios"}
      </button>

      {/* Renderizado de comentarios */}
      {areCommentsVisible && (
        <div className="comments-container">
          {/* Título "Agrega tu comentario" */}
          <h3>Agrega tu comentario</h3>
          {/* Renderizar todos los comentarios */}
          {comments.map((comment, index) => (
            <div key={index} className="comment-container">
              <Comment content={comment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;