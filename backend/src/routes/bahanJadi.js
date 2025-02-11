const express = require("express");
const {
  getAllBahanJadi,
  getBahanJadiById,
  createBahanJadi,
  updateBahanJadi,
  deleteBahanJadi,
} = require("../controllers/bahanJadi");

const router = express.Router();

router.get("/", getAllBahanJadi);
router.get("/:id", getBahanJadiById);
router.post("/", createBahanJadi);
router.put("/:id", updateBahanJadi);
router.delete("/:id", deleteBahanJadi);

module.exports = router;