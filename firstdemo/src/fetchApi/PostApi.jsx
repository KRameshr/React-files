import React from "react";
import Usefectchdata from "../custrom_Hook/Usefectchdata";

const PostApi = () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const postData = Usefectchdata(api);
  return (
    <div>
      <h2>Jsonplaceholder</h2>
      {postData.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostApi;
