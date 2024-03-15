// App.tsx
import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import { fetchPostsAndComments } from './services/jsonPlaceholderService';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPostsAndComments();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts and comments:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeletePost = (postId: number) => {
    // Filtramos los posts para excluir el post que se está borrando
    const updatedPosts = posts.filter((post) => post.id !== postId);
    // Actualizamos el estado de los posts con los posts filtrados
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Prueba Técnica</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          postContent={post.title}
          comments={post.comments}
          onDelete={handleDeletePost} // Pasamos la función onDelete al componente Post
        />
      ))}
    </div>
  );
};

export default App;
