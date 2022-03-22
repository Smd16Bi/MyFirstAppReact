const musicAction = "musicAction"

let initialState = {
   gremis: [
      { singer: "Eminem", count: "100" ,id:1},
      { singer: "AC/DC", count: "1000" ,id:2},
      { singer: "Madona", count: "12320" ,id:3},
      { singer: "50 cent", count: "102320" ,id:4},
      { singer: "Tupac", count: "100111" ,id:5},
      { singer: "Blala", count: "10034334" ,id:6},
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