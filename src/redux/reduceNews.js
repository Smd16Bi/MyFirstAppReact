const newsAction = "newsAction"


let initialState = {
   links: [
      { linka: "Google" ,id:1},
      { linka: "Yandex" ,id:2},
      { linka: "Mail" ,id:3},
      { linka: "Ukrnet" ,id:4},
      { linka: "anton" ,id:5},
      { linka: "oksan" ,id:6},
      { linka: "ssssss" ,id:7},
   ],
}


const reduceNews = (state = initialState, action) => {
   switch (action.type) {
      case newsAction:
         return state;
   }
   return state;
}

export let newsCreateAction = () => {
   return ({
      type: newsAction,
   })
}

export default reduceNews;