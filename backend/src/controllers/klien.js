const prisma = require("../db");

// 📌 Ambil semua klien
exports.getAllKlien = async (req, res) => {
  try {
    const klien = await prisma.client.findMany();
    res.json(klien);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil klien berdasarkan ID
exports.getKlienById = async (req, res) => {
  try {
    const { id } = req.params;
    const klien = await prisma.client.findUnique({ where: { id: Number(id) } });

    if (!klien) return res.status(404).json({ error: "Klien tidak ditemukan" });
    res.json(klien);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Tambah klien baru
exports.createKlien = async (req, res) => {
  try {
    const { nama, alamat, no_hp, kategori } = req.body;
    const newKlien = await prisma.client.create({
      data: { nama, alamat, no_hp, kategori },
    });
    res.status(201).json(newKlien);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update klien berdasarkan ID
exports.updateKlien = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, alamat, no_hp, kategori } = req.body;
    const updatedKlien = await prisma.client.update({
      where: { id: Number(id) },
      data: { nama, alamat, no_hp, kategori },
    });
    res.json(updatedKlien);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Hapus klien berdasarkan ID
exports.deleteKlien = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.client.delete({ where: { id: Number(id) } });
    res.json({ message: "Klien berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
