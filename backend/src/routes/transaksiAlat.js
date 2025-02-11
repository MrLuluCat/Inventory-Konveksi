const express = require("express");
const {
  getAllTransaksiAlat,
  getTransaksiAlatById,
  createTransaksiAlat,
  updateTransaksiAlat,
  deleteTransaksiAlat,
} = require("../controllers/transaksiAlat");

const router = express.Router();

router.get("/", getAllTransaksiAlat);
router.get("/:id", getTransaksiAlatById);
router.post("/", createTransaksiAlat);
router.put("/:id", updateTransaksiAlat);
router.delete("/:id", deleteTransaksiAlat);

module.exports = router;
