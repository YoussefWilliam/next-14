import React from "react";

import classes from "./page.module.css";

const LoadingMeals = () => {
  return <p className={classes.loading}>Fetching meals...</p>;
};

export default LoadingMeals;
