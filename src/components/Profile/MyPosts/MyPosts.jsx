import React from "react";
import { addPostCreateAction, newPostTextCreateAction } from "../../../redux/reducePostPage";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postsElement = props.state.postData.map((elem) => {
      return <Post message={elem.message} count={elem.count} ava={elem.ava} />
   })

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispath(addPostCreateAction())
   }

   let newPostText = () => {
      let text = newPostElement.current.value;
      props.dispath(newPostTextCreateAction(text))
   }

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <div>
               <textarea
                  ref={newPostElement}
                  value={props.state.newPost}
                  onChange={newPostText}
               />
            </div>
            <div>
               <button onClick={addPost}>Add posts</button>
            </div>
         </div>
         <div className={s.posts}>
            <div className={s.item}>
               {postsElement}
            </div>
         </div>
      </div>
   )
}

export default MyPosts;