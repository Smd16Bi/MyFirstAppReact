import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";

let mapStateToProps = (state) => {
   return {
      ava: state.postPage.dis.ava,
      name: state.postPage.dis.name,
      age: state.postPage.dis.age,
      city: state.postPage.dis.city,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const ProfileInfoConteiner = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo)

export default ProfileInfoConteiner;