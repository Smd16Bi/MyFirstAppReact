import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



const Profile = (props) => {
   return <div className={s.content}>
      <ProfileInfo state={props.state.dis} />
      <MyPostsContainer className={s.postsBlock}
         store={props.store}
      />
   </div>

}

export default Profile;