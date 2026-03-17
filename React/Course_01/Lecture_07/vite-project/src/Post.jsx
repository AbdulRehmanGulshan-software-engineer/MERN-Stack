import React from "react";

const Post = React.memo(({ value }) => {
  console.log("Post render");

  //returned JSX
  return (
    <>
      <h1>
        Your name is {value.name} and age is {value.age}.
      </h1>
    </>
  );
});

export default Post;
