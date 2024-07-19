/** @format */
import { features } from 'process';
import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';


interface Post {
  title: string;
  body: string;
  id: number;
  userId  : number;
  author :string;
}
interface User {
    id: number;
    name: string;
}

const ListPost = () => {

  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response1 =await fetch('https://jsonplaceholder.typicode.com/users');

      const data = await response.json();
      const data1 = await response1.json();
      
    const postData = data.map((post:Post)=>{
        const author = data1.find((user:User) => user.id === post.userId).name
        return{...post, author}
     
    })
    
      setPosts(postData);
      console.log(postData)
    }

    fetchData();
  }, []);
  


  return (
    <>
      <h3>List posts</h3>
      {posts.map((item:Post) => (
        <div key={item.id}>
          <b>{item.title}</b>
          <p>{item.body}</p>
          <p>Author :{item.author}</p>
        </div>
      ))}
 
    </>
  );
};

export default ListPost;

// Homework
// 1. fetch users
// 2. { id: postId, title, body, author: name }
// 3. render list post with author on UI, separate post into an individual component