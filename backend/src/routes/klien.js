const express = require("express");
const {
  getAllKlien,
  getKlienById,
  createKlien,
  updateKlien,
  deleteKlien,
} = require("../controllers/klien");

const router = express.Router();

router.get("/", getAllKlien);
router.get("/:id", getKlienById);
router.post("/", createKlien);
router.put("/:id", updateKlien);
router.delete("/:id", deleteKlien);

module.exports = router;
