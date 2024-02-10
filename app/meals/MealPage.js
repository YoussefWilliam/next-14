import MealsGrid from "@/components/meals-grid/meals-grid";
import { getMeals } from "@/lib/meals";
import React from "react";

export const MealPage = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
