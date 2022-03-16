import reduceMessagePage from "./reduceMessagePage";
import reducePostPage from "./reducePostPage";

let store = {

   _state: {

      postPage: {

         postData: [
            { id: 1, count: 5, message: "Hi how are you", ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" },
            { id: 2, count: 2, message: "I am fine and you", ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" },
         ],

         newPost: "",

         dis: {
            name: "Anton Vasylchenko",
            age: 25 + " age",
            city: "Zhitomir",
            ava: "https://upload.wikimedia.org/wikipedia/commons/6/65/Eduard_Sch%C3%B6nfeld_avka_de.de.JPG",
         }
      },

      messagePage: {

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
      },

      links: [
         { linka: "Google" },
         { linka: "Yandex" },
         { linka: "Mail" },
         { linka: "Ukrnet" },
         { linka: "anton" },
         { linka: "oksan" },
         { linka: "ssssss" },
      ],

      gremis: [
         { singer: "Eminem", count: "100" },
         { singer: "AC/DC", count: "1000" },
         { singer: "Madona", count: "12320" },
         { singer: "50 cent", count: "102320" },
         { singer: "Tupac", count: "100111" },
         { singer: "Blala", count: "10034334" },
      ],

      settings: [
         { to: "#", li: "Enter" },
         { to: "#", li: "Exit" },
         { to: "#", li: "Time" },
         { to: "#", li: "Color" },
         { to: "#", li: "Change" },
         { to: "#", li: "Food" },
      ],

      navPage: {

         avas: [
            { ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" },
            { ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" },
            { ava: "https://shapka-youtube.ru/wp-content/uploads/2021/04/foto-parnya-na-avatarku.jpg" },
         ],

         names: [
            { name: "Dima" },
            { name: "Pasha" },
            { name: "Jora" },
         ],
      },
   },
   _renderTree() {
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._renderTree = observer;
   },


   dispatch(action) {

      this._state.postPage = reducePostPage(this._state.postPage, action);
      this._state.messagePage = reduceMessagePage(this._state.messagePage, action);

      this._renderTree(this._state);
   },

}


export default store;