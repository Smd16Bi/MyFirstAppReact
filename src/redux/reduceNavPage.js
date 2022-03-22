const navAction = "navAction";

let initialState = {

   avas: [
      { ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg", id: 1 },
      { ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg", id: 2 },
      { ava: "https://shapka-youtube.ru/wp-content/uploads/2021/04/foto-parnya-na-avatarku.jpg", id: 3 },
   ],

   names: [
      { name: "Dima", id: 1 },
      { name: "Pasha", id: 2 },
      { name: "Jora", id: 3 },
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