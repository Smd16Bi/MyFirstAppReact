import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage.jsx";

const Dialogs = (props) => {

   let dialogsElements = props.dialogsData.map(elem => {
      return <DialogItem name={elem.name} id={elem.id} key={elem.id}/>
   })

   let messagesElements = props.messagesData.map(elem => {
      return <DialogMessage message={elem.message} key={elem.id}/>
   })

   let mess = React.createRef();

   let addMess = () => {
      props.addMess()
   }

   let newMessages = () => {
      let item = mess.current.value;
      props.newMessages(item);
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
                  value={props.newMessage}
                  onChange={newMessages}
               />
               <input onClick={addMess} type="submit" value="Send" />
            </div>
         </div>
      </div>
   )

}

export default Dialogs

