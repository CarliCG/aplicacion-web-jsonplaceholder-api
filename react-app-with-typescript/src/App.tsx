// App.tsx
import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import { fetchPostsAndComments } from './services/jsonPlaceholderService';

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

  return (
    <div>
      <h1>My Simple Blog</h1>
      {posts.map((post) => (
        <Post key={post.id} postContent={post.title} comments={post.comments} />
      ))}
    </div>
  );
};

export default App;