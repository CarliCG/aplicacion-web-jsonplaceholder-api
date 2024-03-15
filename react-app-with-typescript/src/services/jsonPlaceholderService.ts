// jsonPlaceholderService.ts

//obtener publicaciones y comentarios
export async function fetchPostsAndComments() {

  //El bloque try contiene el código que puede lanzar una excepción
    try {
      //Solicitud HTTP GET para obtener las publicaciones 
      const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
      //solicitud HTTP GET para obtener los comentarios 
      const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments');
  
      //Verifica si ambas respuestas de la solicitud son exitosas
      if (!responsePosts.ok || !responseComments.ok) {
        throw new Error('Network response was not ok');
      }
  // Convertir a formato JSON publicaciones y comentarios
      const posts = await responsePosts.json();
      const comments = await responseComments.json();
  
      const postsWithComments = posts.map((post: any) => ({
        ...post,
        comments: comments.filter((comment: any) => comment.postId === post.id).map((comment: any) => comment.body)
      }));
  //Imprime en la consola los datos obtenidos, que incluyen las publicaciones junto con sus comentarios.
      console.log('Data from fetchPostsAndComments:', postsWithComments);
      return postsWithComments;

      //el bloque catch maneja las excepciones que se lanzan durante la ejecución del código dentro del bloque try.
    } catch (error) {
      //En caso de error
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
  