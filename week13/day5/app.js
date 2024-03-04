const express = require("express");
const cors = require("cors");
const exercisesRoutes = require("./routes/exercisesRoutes");
const usersRouts = require("./routes/usersRoutes");
const User_workouts = require("./routes/userWorkoutsRoutes");
const workout = require("./routes/workoutsRouts");
const errorHandler = require("./Middleware/midlleware");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/exercises", exercisesRoutes);
app.use("/users", usersRouts);
app.use("/user_workout", User_workouts);
app.use("/workout", workout);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
