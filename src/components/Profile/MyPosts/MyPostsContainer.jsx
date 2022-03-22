import React from "react";
import { connect } from "react-redux";
import { addPostCreateAction, newPostTextCreateAction } from "../../../redux/reducePostPage";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {

//    let state = props.store.getState();

//    let addPost = () => {
//       props.store.dispatch(addPostCreateAction())
//    }

//    let newPostText = (text) => {
//       props.store.dispatch(newPostTextCreateAction(text))
//    }

//    return (
//       <MyPosts
//          newPostText={newPostText}
//          addPost={addPost}
//          postData={state.postPage.postData}
//          newPost={state.postPage.newPost}
//       />
//    )
// }

let mapStateToProps = (state) => {
   return {
      postData: state.postPage.postData,
      newPost: state.postPage.newPost,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostCreateAction())
      },
      newPostText: (text) => {
         dispatch(newPostTextCreateAction(text))
      },
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;