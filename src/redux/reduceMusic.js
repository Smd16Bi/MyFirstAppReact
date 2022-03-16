const musicAction = "musicAction"

let initialState = {
   gremis: [
      { singer: "Eminem", count: "100" },
      { singer: "AC/DC", count: "1000" },
      { singer: "Madona", count: "12320" },
      { singer: "50 cent", count: "102320" },
      { singer: "Tupac", count: "100111" },
      { singer: "Blala", count: "10034334" },
   ]
}


const reduceMusic = (state = initialState, action) => {
   switch(action.type) {
      case musicAction:
         return state
   }


   return state
}

export let musicCreateAction = () => {
   return ({
      type: musicAction,
   })

}

export default reduceMusic;