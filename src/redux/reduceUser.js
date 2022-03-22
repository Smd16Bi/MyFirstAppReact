const follow = "follow";
const unFollow = "unFollow";
const setUsert = "setUsert";

let initialState = {
   users: [
      { id: 1, followed: true, name: "Anton", status: "I am fine", country: "Ukraine", city: "Kiev" },
      { id: 2, followed: true, name: "Oksana", status: "I am good", country: "Ukraine", city: "Korosteny" },
      { id: 3, followed: true, name: "Sasha", status: "No bad", country: "Ukraine", city: "Zhymomir" },
      { id: 4, followed: true, name: "Dasha", status: "I am great", country: "Ukraine", city: "Konotop" },
   ]
}



const reduceUsers = (state = initialState, action) => {
   switch (action.type) {
      case follow: {
         return {
            ...state,
            users: state.users.map((elem) => {
               if (elem.id === userId) {
                  return {
                     ...elem, followed: true
                  }
               }
               return elem
            }),
         }
      }

      case unFollow: {
         return {
            ...state,
            users: state.users.map((elem) => {
               if (elem.id === userId) {
                  return {
                     ...elem, followed: false
                  }
               }
               return elem
            }),
         }
      }

      case setUsert: {
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      }

      default:
         return state;
   }
}

export let followActionCreat = (userId) => {
   return ({
      type: follow,
      userId,
   })
}

export let unFollowActionCreat = (userId) => {
   return ({
      type: unFollow, userId
   })
}

export let setUsertActionCreat = (users) => {
   return ({
      type: setUsert, users
   })
}
export default reduceUsers;