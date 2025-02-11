const prisma = require("../db");

// 📌 Ambil semua bahan mentah
exports.getAllBahanMentah = async (req, res) => {
  try {
    const bahanMentah = await prisma.bahanMentah.findMany();
    res.json(bahanMentah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil bahan mentah berdasarkan ID
exports.getBahanMentahById = async (req, res) => {
  try {
    const { id } = req.params;
    const bahanMentah = await prisma.bahanMentah.findUnique({
      where: { id: Number(id) },
    });

    if (!bahanMentah)
      return res.status(404).json({ error: "Bahan mentah tidak ditemukan" });
    res.json(bahanMentah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Tambah bahan mentah baru
exports.createBahanMentah = async (req, res) => {
  try {
    const { nama, stok } = req.body;
    const newBahan = await prisma.bahanMentah.create({ data: { nama, stok } });
    res.status(201).json(newBahan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update bahan mentah berdasarkan ID
exports.updateBahanMentah = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, stok } = req.body;
    const updatedBahan = await prisma.bahanMentah.update({
      where: { id: Number(id) },
      data: { nama, stok },
    });
    res.json(updatedBahan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Hapus bahan mentah berdasarkan ID
exports.deleteBahanMentah = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.bahanMentah.delete({ where: { id: Number(id) } });
    res.json({ message: "Bahan mentah berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
