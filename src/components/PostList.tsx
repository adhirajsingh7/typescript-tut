import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostProps } from "../types/types";
import axios from "axios";

// async function getData() {

// }

const PostList = () => {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {

    const getData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(await res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {/* <PostCard title='post title' body='post desc' /> */}
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
