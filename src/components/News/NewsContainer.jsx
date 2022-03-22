import { connect } from "react-redux";
import News from "./News";


let mapStateToProps = (state) => {
   return {
      links: state.links.links,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer