import { connect } from "react-redux";
import OnlineF from "./OnlineF";

let mapStateToProps = (state) => {
   return {
      ava: state.navPage.avas,
      name: state.navPage.names,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const OnlineFContainer = connect(mapStateToProps, mapDispatchToProps)(OnlineF);

export default OnlineFContainer;

