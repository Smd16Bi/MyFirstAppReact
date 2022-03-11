import React from "react"
import s from "./DialogMessage.module.css"

const DialogMessage = (props) => {
   return (
      <div className={s.message}>
         <div className={s.item}> 
            {props.message}
         </div>
      </div>
   )
}

export default DialogMessage;