// App.tsx
import React, { useEffect, useState } from 'react'; //funciones de React
import Post from './components/Post';
import { fetchPostsAndComments } from './services/jsonPlaceholderService'; //realiza una solicitud para obtener publicaciones y comentarios
import 'bootstrap/dist/css/bootstrap.min.css';
//Declaracion del componente
const App: React.FC = () => {
  //declaracion variable post para almacenar publicaciones comentarios
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Realiza una solicitud para obtener las publicaciones y sus comentarios 
        const fetchedPosts = await fetchPostsAndComments();
        //Actualiza el estado de posts con los datos obtenidos de la solicitud.
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts and comments:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Encabezado */}
      <h1>Prueba Técnica</h1>
      {/* método map para iterar sobre todas las publicaciones en el estado posts */}
      {posts.map((post) => (
        //key es el identificador único de cada publicación
        //postContent es el contenido principal de la publicación 
        //comments son los comentarios asociados a esa publicación.
        <Post key={post.id} postContent={post.title} comments={post.comments} />
      ))}
    </div>
  );
};

export default App;