import React from "react";
import List from "./List/List";
import classNews from "./News.module.css";

const News = (props) => {

   let link = props.items.map(elem => {
      return <List link={elem.linka} />
   })

   return(
      <div>
         {link}
      </div>
   )
}

export default News