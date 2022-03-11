import React from "react";
import s from "./Post.module.css"



const Post = (props) => {
   return (
      <div className={s.item}>
         <div className={s.post}>
            <img src={props.ava}/>
            {props.message}
         </div>
         <div className={s.likes}>
            <span></span>
            <span>{props.count}</span>
         </div>
      </div>
   )
}

export default Post;