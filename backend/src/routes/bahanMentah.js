const express = require("express");
const {
  getAllBahanMentah,
  getBahanMentahById,
  createBahanMentah,
  updateBahanMentah,
  deleteBahanMentah,
} = require("../controllers/bahanMentah");


const router = express.Router();

router.get("/", getAllBahanMentah);
router.get("/:id", getBahanMentahById);
router.post("/", createBahanMentah);
router.put("/:id", updateBahanMentah);
router.delete("/:id", deleteBahanMentah);

module.exports = router;
