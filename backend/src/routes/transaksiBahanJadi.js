const express = require("express");
const {
  getAllTransaksiBahanJadi,
  getTransaksiBahanJadiById,
  createTransaksiBahanJadi,
  updateTransaksiBahanJadi,
  deleteTransaksiBahanJadi,
} = require("../controllers/transaksiBahanJadi");

const router = express.Router();

router.get("/", getAllTransaksiBahanJadi);
router.get("/:id", getTransaksiBahanJadiById);
router.post("/", createTransaksiBahanJadi);
router.put("/:id", updateTransaksiBahanJadi);
router.delete("/:id", deleteTransaksiBahanJadi);

module.exports = router;
