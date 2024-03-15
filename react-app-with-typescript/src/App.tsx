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
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleCreatePost = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      title: "Nuevo Post",
      comments: []
    };
    setPosts([newPost, ...posts]);
  };

  const handleUpdateComments = (postId: number, updatedComments: string[]) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: updatedComments };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Prueba Técnica</h1>
      <button onClick={handleCreatePost}>Crear un Post</button>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          postContent={post.title}
          comments={post.comments}
          onDelete={handleDeletePost}
          onUpdateComments={handleUpdateComments} // Pasar la función onUpdateComments como prop
        />
      ))}
    </div>
  );
};

export default App;
