import { useState, useEffect } from 'react';
import '../JSON/ExJ05.css';
export default function ExJ05() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5)));
  }, []);

  return (
    <div className="postBox">
      <h2>게시글 5개</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id} onClick={() => alert(p.body)}>
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
