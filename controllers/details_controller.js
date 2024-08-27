import Habit from "../models/habits.js";

// Controller to get details request
export const details = async (req, res) => {
  try {
    const habits = await Habit.find({});
    return res.render("details", {
      title: "Habit Tracker",
      habit_list: habits,
    });
  } catch (err) {
    console.error("Error in fetching the habits:", err);
    return res.status(500).send("Error fetching habits");
  }
};

// Updating the database for the request
export const updateHabit = async (req, res) => {
  const { id, day, val } = req.query;

  // Ensure all required query parameters are present
  if (!id || !day || !val) {
    return res.status(400).send("Missing query parameters");
  }

  try {
    const habit = await Habit.findById(id);
    if (!habit) {
      console.error(`Habit with id ${id} not found`);
      return res.status(404).send("Habit not found");
    }

    // Update habit days and streak based on `val`
    if (day in habit.days) {
      switch (val) {
        case "none":
          habit.days[day] = "yes";
          habit.streak++;
          break;
        case "yes":
          habit.days[day] = "no";
          habit.streak--;
          break;
        case "no":
          habit.days[day] = "none";
          break;
        default:
          return res.status(400).send("Invalid value for day status");
      }
    } else {
      return res.status(400).send("Invalid day provided");
    }
    // updating that found habit
    await habit.save();
    return res.redirect("/details");
  } catch (err) {
    console.error("Error in updating the habit:", err);
    return res.status(500).send("Error in updating the habit");
  }
};
