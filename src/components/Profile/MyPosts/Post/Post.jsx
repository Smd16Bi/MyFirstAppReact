import React from "react";
import classPro from "./Post.module.css"



const Post = (props) => {
   return (
      <div className={classPro.item}>
         <img src="https://fs.kinomania.ru/file/film_poster/1/3e/13e26a9721c02dc4a7b92122f90f553e.jpeg" alt="" />
         {props.message}
         <div>
            <span>Like  {props.count}</span>
         </div>
      </div>
   )
}

export default Post;