# Aplicación Web con JSONPlaceholder API
Aplicación web utilizando React y TypeScript que interactúe con la API JSONPlaceholder. La aplicación debe permitir a los usuarios ver, crear, actualizar y eliminar publicaciones, así como agregar comentarios a las publicaciones.

## Crear una app con Ract y TypeScript
Se creo mediante consola la aplicacion usando el comando "npx create-react-app react-app-with-typescript --template typescript"

Primero, en el archivo App.tsx, que viene por default, y es el componente principal de la aplicación, permite obtener las publicaciones y comentarios del servicio en línea, y luego renderiza estas publicaciones junto con sus comentarios en la interfaz de usuario.

una vez configurado el ambiente de trabajo, se creo una carpeta de components dentro de src, con los componentes de Post.tsx (publicaciones) y Comments.tsx (comentarios).

### Post.tx
Define un componente Post que muestra el contenido de un post y una lista de comentarios asociados a ese post. Utiliza el componente Comment para representar cada comentario en la lista.

### Comments.tsx
define un componente Comment que muestra el contenido de un comentario. Este componente recibe el contenido del comentario a través de una propiedad llamada content.

## jsonPlaceholderService.ts
Se creo una carpeta servicios, con jsonPlaceholderService.ts.
Define una función fetchPostsAndComments que realiza dos solicitudes HTTP GET para obtener publicaciones y comentarios desde JSONPlaceholder API. Luego combina las publicaciones con sus comentarios asociados y devuelve los datos obtenidos para su uso posterior.
