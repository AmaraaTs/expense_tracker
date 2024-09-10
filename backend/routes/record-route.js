const { Router } = require("express");
const {
  createRecord,
  getAllRecord,
  updateRecord,
  deleteRecord,
  getInfo,
  getChartData,
} = require("../controllers/record-controller");

const router = Router();

// router.route("/info").get(getInfo).post(createRecord);
// router.route("/").get(getAllRecord).post(createRecord);

router.route("/info").get(getInfo);
router.route("/chart").get(getChartData);
router.route("/").get(getAllRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
