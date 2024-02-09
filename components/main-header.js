import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="home-page" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals Page</Link>
          </li>
          <li>
            <Link href="/community">Community Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
