import React from "react";
import classNav from "./Nav.module.css"

const Nav = () => {
   return <nav className={classNav.nav}>
   <div className={`${classNav.item}  ${classNav.active}`}>
      <a href="/profile">Profile</a>
   </div>
   <div className={classNav.item}>
      <a href="/dialogs">Message</a>
   </div>
   <div className={classNav.item}>
      <a>News</a>
   </div>
   <div className={classNav.item}>
      <a>Music</a>
   </div>
</nav>
}

export default Nav;