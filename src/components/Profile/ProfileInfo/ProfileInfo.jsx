import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {


   return (
      <div>
         <div className={s.image}>
            <img src='https://images.pexels.com/photos/261821/pexels-photo-261821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
         </div>
         <div className={s.discriptionBlock}>
            <div className={s.ava}>
               <img src={props.ava} />
            </div>
            <div className={s.dis}>
               <h2>{props.name}</h2>
               <p>{props.age}</p>
               <p>{props.city}</p>
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo;