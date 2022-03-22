import { connect } from "react-redux";
import Setting from "./Setting";

let mapStateToProps = (state) => {
   return {
      settings: state.settings.settings,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const SettingContainer = connect(mapStateToProps, mapDispatchToProps)(Setting);

export default SettingContainer