const express = require("express");
const {
  getAllTransaksiBahanMentah,
  getTransaksiBahanMentahById,
  createTransaksiBahanMentah,
  updateTransaksiBahanMentah,
  deleteTransaksiBahanMentah,
} = require("../controllers/transaksiBahanMentah");

const router = express.Router();

router.get("/", getAllTransaksiBahanMentah);
router.get("/:id", getTransaksiBahanMentahById);
router.post("/", createTransaksiBahanMentah);
router.put("/:id", updateTransaksiBahanMentah);
router.delete("/:id", deleteTransaksiBahanMentah);

module.exports = router;
