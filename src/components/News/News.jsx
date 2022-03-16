import React from "react";
import reduceNews from "../../redux/reduceNews";
import List from "./List/List";
import classNews from "./News.module.css";

const News = (props) => {

   let link = props.state.links.map(elem => {
      return <List link={elem.linka} />
   })

   return (
      <div>
         {link}
      </div>
   )
}

export default News