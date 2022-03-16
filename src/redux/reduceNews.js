const newsAction = "newsAction"


let initialState = {
   links: [
      { linka: "Google" },
      { linka: "Yandex" },
      { linka: "Mail" },
      { linka: "Ukrnet" },
      { linka: "anton" },
      { linka: "oksan" },
      { linka: "ssssss" },
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