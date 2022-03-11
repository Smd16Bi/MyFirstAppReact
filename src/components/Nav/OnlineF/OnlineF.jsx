import React from "react";
import s from "./OnlineF.module.css";

const OnlineF = (props) => {
   
   let ava = props.ava.map(elem => {
      return <img src={elem.ava} />

   })


   let name = props.name.map(elem => {
      return <span>{elem.name}</span>
   })
   return (
      <div>
         <h2 className={s.text}>Friends online:</h2>
         <div className={s.image}>
            {ava}
         </div>
         <div className={s.group}>
            {name}
         </div>
      </div>
   )
}
export default OnlineF;