import React from "react";
import Li from "./LI/Li";
import s from "./Setting.module.css"

const Setting = (props) => {

   let setting = props.settings.map(elem => {
      return <Li to={elem.to} li={elem.li} key={elem.id} />
   })
   return (
      <div>
         <ul className={s.nav}>
            {setting}
         </ul>
      </div>
   )
};

export default Setting