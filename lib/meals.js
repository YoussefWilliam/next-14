import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Error in fetching meals");
  return db.prepare("SELECT * FROM meals").all();
}
