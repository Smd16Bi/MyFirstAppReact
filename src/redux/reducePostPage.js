const addPost = "addPost";
const textPost = "textPost";

let initialState = {

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
}

const reducePostPage = (state = initialState, action) => {

   switch (action.type) {
      case addPost:
         let newPost = {
            id: 3,
            message: state.newPost,
            count: 0,
            ava: state.dis.ava,
         }
         state.postData.push(newPost);
         state.newPost = "";
         return state;

      case textPost:
         state.newPost = action.text;
         return state;
      default:
         return state;
   }
}

export let addPostCreateAction = () => {
   return (
      { type: addPost }
   )
};

export let newPostTextCreateAction = (text) => {
   return (
      { type: textPost, text: text }
   )
};

export default reducePostPage;