import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "../nav-link/nav-link";

const Header = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="home-page" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Menu page</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community Page</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
