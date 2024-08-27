import Habit from "../models/habits.js";

// Homepage controller
export const home = async (req, res) => {
  try {
    const habits = await Habit.find({});
    res.render("home", {
      title: "Habit Tracker",
      habit_list: habits,
    });
  } catch (err) {
    console.error("Error in fetching the habits:", err);
    res.status(500).send("Error in fetching the habits");
  }
};

// Controller to create a habit
export const createHabit = async (req, res) => {
  const days = {
    one: "none",
    two: "none",
    three: "none",
    four: "none",
    five: "none",
    six: "none",
    seven: "none",
  };

  try {
    const newHabit = await Habit.create({
      habit: req.body.habit,
      end: req.body.end,
      description: req.body.description,
      frequency: req.body.frequency,
      date: new Date().toISOString(),
      time: req.body.time,
      days: days,
    });
    console.log(newHabit);
    res.redirect("back");
  } catch (err) {
    console.error("Error in creating habit:", err);
    res.status(500).send("Error in creating habit");
  }
};

// Controller to delete a habit
export const deleteHabit = async (req, res) => {
  const { id } = req.query;

  try {
    await Habit.findByIdAndDelete(id);
    res.redirect("back");
  } catch (err) {
    console.error("Error in deleting Habit:", err);
    res.status(500).send("Error in deleting Habit");
  }
};
