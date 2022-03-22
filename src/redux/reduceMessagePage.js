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
      case addMess: {
         // let item = {
         //    id: 1,
         //    message: state.newMessage,
         // }
         // let stateCopy = { ...state };
         // stateCopy.messagesData = [ ...state.messagesData ];
         // stateCopy.messagesData.push(item);
         // stateCopy.newMessage = "";
         // return stateCopy;
         return {
            ...state,
            newMessage: "",
            messagesData: [...state.messagesData, { id: 1, message: state.newMessage }]
         }
      }
      case newMess: {
         // let stateCopy = { ...state };
         // stateCopy.newMessage = action.text;
         // return stateCopy;
         return {
            ...state,
            newMessage: action.text,
         };
      }
      default:
         return state;
   }
}



export default reduceMessagePage;