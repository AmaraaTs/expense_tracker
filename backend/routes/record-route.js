const { Router } = require("express");
const {
  createRecord,
  getAllRecord,
  updateRecord,
  deleteRecord,
  getInfo,
} = require("../controllers/record-controller");

const router = Router();

router.route("/info").get(getInfo).post(createRecord);
router.route("/").get(getAllRecord).post(createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
