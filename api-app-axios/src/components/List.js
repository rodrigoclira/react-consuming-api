import React from 'react';
const List = (props) => {
  const { post } = props;
  if (!post || post.length === 0) return <p>No posts, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {post.map((post) => {
        return (
          <li key={post.id} className='list'>
            <span className='repo-text'>{post.title} </span>
            <span className='repo-description'>{post.body}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;