import React from "react";
import ListMus from "./ListMus/ListMus";
import classMusic from "./Music.module.css"

const Music = (props) => {

   let gremi = props.gremis.map(elem => {
      return <ListMus singer={elem.singer} count={elem.count} key={elem.id}/>
   })

   return (
      <div>
         {gremi}
      </div>
   )
};

export default Music;