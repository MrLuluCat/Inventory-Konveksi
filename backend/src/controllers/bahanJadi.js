const prisma = require("../db");

// 📌 Ambil semua bahan jadi
exports.getAllBahanJadi = async (req, res) => {
  try {
    const bahanJadi = await prisma.bahanJadi.findMany();
    res.json(bahanJadi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil bahan jadi berdasarkan ID
exports.getBahanJadiById = async (req, res) => {
  try {
    const { id } = req.params;
    const bahanJadi = await prisma.bahanJadi.findUnique({
      where: { id: Number(id) },
    });

    if (!bahanJadi)
      return res.status(404).json({ error: "Bahan jadi tidak ditemukan" });
    res.json(bahanJadi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Tambah bahan jadi baru
exports.createBahanJadi = async (req, res) => {
  try {
    const { nama, stok, size } = req.body;
    const newBahanJadi = await prisma.bahanJadi.create({
      data: { nama, stok, size },
    });
    res.status(201).json(newBahanJadi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update bahan jadi berdasarkan ID
exports.updateBahanJadi = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, stok, size } = req.body;
    const updatedBahanJadi = await prisma.bahanJadi.update({
      where: { id: Number(id) },
      data: { nama, stok, size },
    });
    res.json(updatedBahanJadi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Hapus bahan jadi berdasarkan ID
exports.deleteBahanJadi = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.bahanJadi.delete({ where: { id: Number(id) } });
    res.json({ message: "Bahan jadi berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
