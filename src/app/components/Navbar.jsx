import React from "react";
import styles from "../styles/navbar.module.css";
import { DropDownbtn, Header, Items } from "./DropDownbtn";
import Link from "next/link";
const Navbar = () => {

    const item = [
        {name:"Login as job seeker",link:"/login"},
        {name:"Login as recruiter",link:"/register"},
    ];
  return (
    <div className={styles.navbar}>
     <Link href={"/"}> <h1>Job-Monster</h1></Link>
      <div className={styles.list_item}>
        <ul>
          <li>Activity</li>
          <li>Opportunity</li>
          <li>Profile</li>
          <li>
            <DropDownbtn btn="Click Me" dorpItem="Item 1">
              <Header>Click to Toggle Items</Header>
              <Items items={item}/>
            </DropDownbtn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
