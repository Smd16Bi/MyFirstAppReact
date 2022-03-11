import React from "react";
import s from "./Li.module.css"

const Li = (props) => {
   return (
      <div>
         <li className={s.link}>
            <a href={props.to}>{props.li}</a>
         </li>
      </div>
   )
}
export default Li