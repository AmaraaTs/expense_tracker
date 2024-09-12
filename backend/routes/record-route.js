const { Router } = require("express");
const {
  createRecord,
  getAllRecord,
  updateRecord,
  deleteRecord,
  getInfo,
  getChartData,
  getCash,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/cash").get(getCash);
router.route("/info").get(getInfo);
router.route("/chart").get(getChartData);
router.route("/").get(auth, getAllRecord).post(createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
