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

let initialState = {

   dialogsData: [
      { id: 1, name: "Dimysh" },
      { id: 2, name: "Anton" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Yara" },
      { id: 5, name: "Pasa" },
   ],

   messagesData: [
      { id: 1, message: "hi" },
      { id: 2, message: "how are you" },
      { id: 3, message: "yo" },
      { id: 4, message: "yo" },
      { id: 5, message: "yo" },
   ],

   newMessage: "",
}



const reduceMessagePage = (state = initialState, action) => {
   switch (action.type) {
      case addMess:
         let item = {
            id: 1,
            message: state.newMessage,
         }
         state.messagesData.push(item);
         state.newMessage = "";
         return state;

      case newMess:
         state.newMessage = action.text;
         return state;
      default:
         return state;
   }
}



export default reduceMessagePage;