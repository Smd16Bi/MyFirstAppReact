import React from "react";
import { NavLink } from "react-router-dom";
import classNav from "./Nav.module.css"
import OnlineF from "./OnlineF/OnlineF";

const Nav = (props) => {

   return <nav className={classNav.nav}>
      <div className={classNav.item}>
         <NavLink to="/profile" className={navData => navData.isActive ? classNav.active : classNav.item} >Profile</NavLink>
      </div>
      <div className={classNav.item}>
         <NavLink to="/dialogs" className={navData => navData.isActive ? classNav.active : classNav.item}>Message</NavLink>
      </div>
      <div className={classNav.item}>
         <NavLink to="/news" className={navData => navData.isActive ? classNav.active : classNav.item}> News</NavLink>
      </div>
      <div className={classNav.item}>
         <NavLink to="/music" className={navData => navData.isActive ? classNav.active : classNav.item}>Music</NavLink>
      </div>
      <div className={classNav.item}>
         <NavLink to="/setting" className={navData => navData.isActive ? classNav.active : classNav.item}>Setting</NavLink>
      </div>

      <div className={classNav.item}>
         <OnlineF state={props.state} dispatch={props.dispatch}/>
      </div>
   </nav>
}

export default Nav;