const settingAction = "settingAction"


let initialState = {
   settings: [
      { to: "#", li: "Enter" },
      { to: "#", li: "Exit" },
      { to: "#", li: "Time" },
      { to: "#", li: "Color" },
      { to: "#", li: "Change" },
      { to: "#", li: "Food" },
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