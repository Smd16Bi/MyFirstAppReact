const addMess = "addMess";
const newMess = "newMess";

export let addMessCreateAction = () => {
   return (
      { type: addMess }
   )
};

export let newMessagesCreateAction = (item) => {
   return (
      { type: newMess, text: item }
   )
}

const reduceMessagePage = (state, action) => {
   switch (action.type) {
      case addMess:
         let item = {
            id: 1,
            message: state.newMessage,
         }
         state.messagesData.push(item);
         state.newMessage = "";
         break;

      case newMess:
         state.newMessage = action.text;
         break;
      default:
         return state;
   }

   return state
}

export default reduceMessagePage;