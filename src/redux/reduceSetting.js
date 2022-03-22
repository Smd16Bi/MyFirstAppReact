const settingAction = "settingAction"


let initialState = {
   settings: [
      { to: "#", li: "Enter" ,id:1},
      { to: "#", li: "Exit" ,id:2},
      { to: "#", li: "Time" ,id:3},
      { to: "#", li: "Color" ,id:4},
      { to: "#", li: "Change" ,id:5},
      { to: "#", li: "Food" ,id:6},
   ]
}

const reduceSettings = (state = initialState, action) => {
   switch (action.type) {
      case settingAction:
         return state;
   }
   return state;
}

export let settingCreateAction = () => {
   return ({
      type: settingAction,
   })
}

export default reduceSettings;