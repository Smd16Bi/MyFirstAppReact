import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



const Profile = (props) => {

   return <div className={s.content}>
      <ProfileInfo state={props.state.dis} />
      <MyPosts className={s.postsBlock}
         state={props.state}
         dispath={props.dispath}
      />
   </div>

}

export default Profile;