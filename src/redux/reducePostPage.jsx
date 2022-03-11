const addPost = "addPost";
const textPost = "textPost";

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

const reducePostPage = (state, action) => {

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
         break;

      case textPost:
         state.newPost = action.text;
         break;
      default:
         return state;
   }

   return state
}

export default reducePostPage;