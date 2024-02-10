import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals-grid/meals-grid";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/meals/share">Share your favorite meal recipes</Link>
          </div>
        </div>
      </header>
      <main classes={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
