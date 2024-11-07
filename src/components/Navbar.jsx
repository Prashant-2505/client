"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/styles/navbar.module.css";
import { DropDownbtn, Header, Items } from "./DropDownbtn";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false); // state to track client-side rendering

  const item = [
    { name: "Login as job seeker", link: "/login" },
    { name: "Login as recruiter", link: "/register" },
  ];

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setIsClient(true); // Mark component as mounted after client-side rendering.
  }, []);

  if (!isClient) {
    return null; // Prevent rendering during SSR to avoid hydration mismatch
  }

  return (
    <div className={styles.navbar}>
      <Link href={"/"}>
        <h1>Job-Monster</h1>
      </Link>
      <div className={styles.list_item}>
        <ul>
          <li>Activity</li>
          <li>Opportunity</li>
          <li>Profile</li>
          <li>
            {user ? (
              <button>Log out</button>
            ) : (
              <DropDownbtn btn="Click Me" dorpItem="Item 1">
                <Header>Login as</Header>
                <Items items={item} />
              </DropDownbtn>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
