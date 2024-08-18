"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5678/data/app-name/api/posts').then(async (res) => {
      const data = await res.json();
      setPosts( data.posts );
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-3xl p-24">
      <ol>
        { posts && posts.map((post, index) => (
          <li className="mb-4">{post.title}</li>
        ))}
      </ol>
    </main>
  );
}
