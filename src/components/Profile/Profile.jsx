import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import s from "./Profile.module.css"
import ProfileInfoConteiner from "./ProfileInfo/ProfileInfoContainer.jsx";


const Profile = (props) => {
   return <div className={s.content}>
      <ProfileInfoConteiner store={props.store} />
      <MyPostsContainer className={s.postsBlock} />
   </div>

}

export default Profile;