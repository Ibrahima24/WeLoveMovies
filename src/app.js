if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors")
const moviesRoutes = require("./movies/movies.router");
const theatersRoutes = require("./theaters/theaters.router")
const reviewsRoutes = require("./reviews/reviews.router")
const app = express();


app.use(cors());
app.use(express.json());
app.use("/movies",moviesRoutes);
app.use("/theaters", theatersRoutes)
app.use("/reviews",reviewsRoutes)

// Not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
  });

  // Error handler
app.use((error, req, res, next) => {
  console.log("in error handler")
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });

module.exports = app;