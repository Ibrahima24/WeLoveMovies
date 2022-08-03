const router = require("express").Router();
const controller = require("./movies.controller");
const theaterRouter = require("../theaters/theaters.router")
const reviewRouter = require("../reviews/reviews.router")

router.use("/:movieId/reviews", controller.movieExists, reviewRouter)
router.use("/:movieId/theaters", controller.movieExists, theaterRouter)
router.route("/:movieId").get(controller.read)
router.route("/").get(controller.list)



module.exports = router;