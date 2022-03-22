import React from "react";
import { connect } from "react-redux";
import { addMessCreateAction, newMessagesCreateAction } from "../../redux/reduceMessagePage";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {

//    let state = props.store.getState();

//    let addMess = () => {
//       props.store.dispatch(addMessCreateAction())
//    }

//    let newMessages = (item) => {
//       props.store.dispatch(newMessagesCreateAction(item))
//    }


//    return (
//       <Dialogs
//          addMess={addMess}
//          newMessages={newMessages}
//          dialogsData={state.messagePage.dialogsData}
//          messagesData={state.messagePage.messagesData}
//          newMessage={state.messagePage.newMessage}
//       />
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogsData: state.messagePage.dialogsData,
      messagesData: state.messagePage.messagesData,
      newMessage: state.messagePage.newMessage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addMess: () => {
         dispatch(addMessCreateAction())
      },

      newMessages: (item) => {
         dispatch(newMessagesCreateAction(item))
      }

   }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer

