const router = require("express").Router();
const userRoutes = require('./userRoutes');
const cardRoutes = require("./cardRoutes");

router.use("/cards", cardRoutes);
router.use('/users', userRoutes);

module.exports = router;
