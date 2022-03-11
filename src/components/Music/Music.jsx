import React from "react";
import ListMus from "./ListMus/ListMus";
import classMusic from "./Music.module.css"

const Music = (props) => {

   let gremi = props.x.map(elem => {
      return <ListMus singer={elem.singer} count={elem.count} />
   })

   return (
      <div>
         {gremi}
      </div>
   )
};

export default Music;