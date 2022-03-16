import React from "react";
import { addMessCreateAction, newMessagesCreateAction } from "../../redux/reduceMessagePage";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

   let state = props.store.getState();

   let addMess = () => {
      props.store.dispatch(addMessCreateAction())
   }

   let newMessages = (item) => {
      props.store.dispatch(newMessagesCreateAction(item))
   }


   return (
      <Dialogs
         addMess={addMess}
         newMessages={newMessages}
         dialogsData={state.messagePage.dialogsData}
         messagesData={state.messagePage.messagesData}
         newMessage={state.messagePage.newMessage}
      />
   )

}

export default DialogsContainer

