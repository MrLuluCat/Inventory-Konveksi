const express = require("express");
const {
  getAllAlat,
  getAlatById,
  createAlat,
  updateAlat,
  deleteAlat,
} = require("../controllers/alat");

const router = express.Router();

router.get("/", getAllAlat);
router.get("/:id", getAlatById);
router.post("/", createAlat);
router.put("/:id", updateAlat);
router.delete("/:id", deleteAlat);

module.exports = router;
