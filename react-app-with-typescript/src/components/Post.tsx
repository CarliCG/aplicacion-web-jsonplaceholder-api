import React, { useState } from 'react';
import Comment from './Comment';
import './post.css';

interface PostProps {
  postId: number;
  postContent: string;
  comments: string[];
  onDelete: (postId: number) => void;
  onUpdateComments: (postId: number, updatedComments: string[]) => void;
}

const Post: React.FC<PostProps> = ({ postId, postContent, comments, onDelete, onUpdateComments }) => {
  const [areCommentsVisible, setAreCommentsVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(postContent);
  const [currentPostContent, setCurrentPostContent] = useState<string>(postContent);
  const [newComment, setNewComment] = useState<string>(''); // Estado para el nuevo comentario
  const [showCommentInput, setShowCommentInput] = useState<boolean>(false); // Estado para mostrar/ocultar el área de texto del comentario

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
      onDelete(postId);
    }
  };

  const handleAddComment = () => {
    setShowCommentInput(true); // Mostrar el área de texto para agregar comentario al hacer clic en "Agregar comentario"
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value); // Actualizar el estado del nuevo comentario conforme el usuario escribe en el área de texto
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      setNewComment('');
      setShowCommentInput(false); // Ocultar el área de texto después de agregar el comentario
      onUpdateComments(postId, updatedComments);
    }
  };

  return (
    <div className="post-container">
      <div className="card__flipper">
        <div className="card__front">
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <p className="card__name">{currentPostContent}</p>
          )}
        </div>
      </div>
      <div className="buttons-container">
        {isEditing ? (
          <button className="btn btn-success btn-sm mr-2" onClick={handleSave}>Guardar</button>
        ) : (
          <>
            <button className="btn btn-secondary btn-sm mr-2" onClick={handleEdit}>Editar</button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>Borrar</button>
            <button className="btn btn-primary btn-sm mr-2" onClick={handleAddComment}>Agregar comentario</button>
          </>
        )}
      </div>

      {showCommentInput && (
        <div className="comment-input-container">
          <textarea
            className="comment-input"
            placeholder="Escribe tu comentario..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button className="btn btn-primary btn-sm mt-2" onClick={handleCommentSubmit}>Enviar comentario</button>
        </div>
      )}

      <button
        className="btn btn-primary btn-sm mt-2 btn-see-comments"
        onClick={toggleCommentsVisibility}
      >
        {areCommentsVisible ? "Ocultar comentarios" : "Ver comentarios"}
      </button>

      {areCommentsVisible && (
        <div className="comments-container">
          <h3>Comentarios</h3>
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
