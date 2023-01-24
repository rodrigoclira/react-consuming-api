import React, { useEffect, useState } from 'react';
import api from './services/api';

// https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/

function App() {
   const [posts, setPosts] = useState([]);

   // GET with Axios
   useEffect(() => {
      const fetchPost = async () => {
         let response = await api.get('?_limit=10');
         setPosts(response.data);
      };
      fetchPost();
   }, []);

 return (
   <div className="posts-container">
    {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
             <h2 className="post-title">{post.title}</h2>
             <p className="post-body">{post.body}</p>
             <div className="button">
             <div className="delete-btn">Delete</div>
             </div>
          </div>
       );
    })}
 </div>
   );
}

export default App;
