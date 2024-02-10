import React from "react";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
