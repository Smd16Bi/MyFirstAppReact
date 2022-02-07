import React from "react";
import classPro from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = () => {
   return (
      <div>
         My posts
         <div>
            <textarea></textarea>
            <button>Add posts</button>
         </div>
         <div className={classPro.posts}>
            <Post message = "Hi how are you" count = "5"/>
            <Post message = "I am fine and you" count = "2"/>
         </div>
      </div>
   )
}

export default MyPosts;