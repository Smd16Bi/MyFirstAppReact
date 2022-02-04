import React from "react";
import classNav from "./Nav.module.css"

const Nav = () => {
   return <nav className={classNav.nav}>
   <div className={classNav.item}>
      <a>Profile</a>
   </div>
   <div className={classNav.item}>
      <a>Message</a>
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