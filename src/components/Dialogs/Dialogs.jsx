import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage.jsx";
import { addMessCreateAction, newMessagesCreateAction } from "../../redux/reduceMessagePage";

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogsData.map(elem => {
      return <DialogItem name={elem.name} id={elem.id} />
   })

   let messagesElements = props.state.messagesData.map(elem => {
      return <DialogMessage message={elem.message} />
   })

   let mess = React.createRef();

   let addMess = () => {
      props.dispath(addMessCreateAction())
   }

   let newMessages = () => {
      let item = mess.current.value;
      props.dispath(newMessagesCreateAction(item))
   }


   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_item}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <div className={s.form}>
               <input
                  ref={mess}
                  value={props.state.newMessage}
                  onChange={newMessages}
               />
               <input onClick={addMess} type="submit" value="Send" />
            </div>
         </div>
      </div>
   )

}

export default Dialogs

