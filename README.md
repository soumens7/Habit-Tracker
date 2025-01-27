# Habit Tracker Application

This is a simple Habit Tracking web application built using Node.js, Express, and MongoDB. The app allows users to create, track, update, and delete habits while visualizing their progress.

Check out the live version of the project [here](https://habit-tracker-1-xz6v.onrender.com)

## Installation and Run

Follow these steps:

- Get the code on your system.
- Open the terminal on your pc and navigate to the project's root directory.
- Run the "npm install" command inside the terminal to install all the required dependencies.
- Create a '.env' file inside the root directory and define values for
- PORT ( port on which your project will run )
- MONGODB_URI ( URI of your MongoDB database for connecting to a database )
- Run the 'npm start' command inside the terminal to run the code.
- Open your web browser and search for 'localhost:{PORT}/' to see the output.

## Features

- **Create Habits**: Users can add new habits with details like name, description, frequency, and duration.
- **Track Progress**: Users can track their daily habit completion status (e.g., completed, missed, or not attempted).
- **Update Habits**: Users can update their habits' status daily and the app automatically updates streaks and progress.
- **Delete Habits**: Users can delete any habit they no longer wish to track.
- **View Habit Details**: Users can view all their habits on the details page with their corresponding completion status.

## Usage

<img width="1512" alt="Screenshot 2025-01-25 at 2 24 41 PM" src="https://github.com/user-attachments/assets/0554e257-5b3d-4ba6-ba11-0b14024a1404" />
<img width="1512" alt="Screenshot 2025-01-25 at 2 25 20 PM" src="https://github.com/user-attachments/assets/34a265e8-c68b-4c59-97fb-39b3af1808fa" />
<img width="1508" alt="Screenshot 2025-01-25 at 2 26 24 PM" src="https://github.com/user-attachments/assets/12273f5c-b5f7-4f75-9379-09b4e48e6529" />


## Project Structure

```bash
.
├── assets/               # Static assets like CSS and JavaScript
├── config/
│   └── mongoose.js       # MongoDB connection setup
├── controllers/
│   ├── details_controller.js  # Controller for habit details page and habit updates
│   ├── home_controller.js     # Controller for homepage and core habit CRUD operations
│   └── habit_controller.js    # Logic for updating habits
├── models/
│   └── habits.js          # Habit schema for MongoDB
├── routes/
│   ├── index.js           # Main router for the application
│   └── details.js         # Router for details page
├── views/
│   ├── details.ejs        # EJS template for the details page
│   ├── home.ejs           # EJS template for the homepage
│   └── layout.ejs         # Main layout file for consistent page structure
├── .env                   # Environment variables file
├── app.js                 # Main application entry point
└── package.json           # Node.js dependencies and scripts
```

