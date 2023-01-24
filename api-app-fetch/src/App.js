import React, { useEffect, useState } from "react";
import './App.css';


// https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/

function App() {
  let result="nothing";
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
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
