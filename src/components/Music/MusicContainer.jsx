import { connect } from "react-redux";
import Music from "./Music";


let mapStateToProps = (state) => {
   return {
      gremis: state.gremis.gremis,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)

export default MusicContainer;