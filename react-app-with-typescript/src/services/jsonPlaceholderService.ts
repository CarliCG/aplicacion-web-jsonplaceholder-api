// jsonPlaceholderService.ts
export async function fetchPostsAndComments() {
    try {
      const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments');
  
      if (!responsePosts.ok || !responseComments.ok) {
        throw new Error('Network response was not ok');
      }
  
      const posts = await responsePosts.json();
      const comments = await responseComments.json();
  
      const postsWithComments = posts.map((post: any) => ({
        ...post,
        comments: comments.filter((comment: any) => comment.postId === post.id).map((comment: any) => comment.body)
      }));
  
      console.log('Data from fetchPostsAndComments:', postsWithComments);
      return postsWithComments;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
  