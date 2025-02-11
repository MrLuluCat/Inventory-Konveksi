const prisma = require("../db");

// 📌 Ambil semua alat
exports.getAllAlat = async (req, res) => {
  try {
    const alat = await prisma.alat.findMany();
    res.json(alat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil alat berdasarkan ID
exports.getAlatById = async (req, res) => {
  try {
    const { id } = req.params;
    const alat = await prisma.alat.findUnique({ where: { id: Number(id) } });

    if (!alat) return res.status(404).json({ error: "Alat tidak ditemukan" });
    res.json(alat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Tambah alat baru
exports.createAlat = async (req, res) => {
  try {
    const { nama, jumlah, used, unused, rusak } = req.body;
    const newAlat = await prisma.alat.create({
      data: { nama, jumlah, used, unused, rusak },
    });
    res.status(201).json(newAlat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update alat berdasarkan ID
exports.updateAlat = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, jumlah, used, unused, rusak } = req.body;
    const updatedAlat = await prisma.alat.update({
      where: { id: Number(id) },
      data: { nama, jumlah, used, unused, rusak },
    });
    res.json(updatedAlat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Hapus alat berdasarkan ID
exports.deleteAlat = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.alat.delete({ where: { id: Number(id) } });
    res.json({ message: "Alat berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
