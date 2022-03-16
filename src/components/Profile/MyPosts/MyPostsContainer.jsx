import React from "react";
import { addPostCreateAction, newPostTextCreateAction } from "../../../redux/reducePostPage";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

   let state = props.store.getState();

   let addPost = () => {
      props.store.dispatch(addPostCreateAction())
   }

   let newPostText = (text) => {
      props.store.dispatch(newPostTextCreateAction(text))
   }

   return (
      <MyPosts
         newPostText={newPostText}
         addPost={addPost}
         postData={state.postPage.postData} 
         newPost={state.postPage.newPost}
         />
   )
}

export default MyPostsContainer;