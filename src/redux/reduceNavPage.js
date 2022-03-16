const navAction = "navAction";

let initialState = {

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
}

const reduceNavPage = (state = initialState, action) => {
   switch (action.type) {
      case navAction:
         return state;
      default:
         return state;
   }
}

export let navCreateAction = () => {
   return (
      { type: navAction }
   )
};

export default reduceNavPage;