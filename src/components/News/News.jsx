import React from "react";
import List from "./List/List";

const News = (props) => {

   let link = props.links.map(elem => {
      return <List link={elem.linka} key={elem.id}/>
   })

   return (
      <div>
         {link}
      </div>
   )
}

export default News