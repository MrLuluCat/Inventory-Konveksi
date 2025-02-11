const prisma = require("../db");

// 📌 Ambil semua transaksi alat
exports.getAllTransaksiAlat = async (req, res) => {
  try {
    const transaksi = await prisma.transaksiAlat.findMany({
      include: {
        alat: true, // Join ke tabel alat
      },
    });
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil transaksi alat berdasarkan ID
exports.getTransaksiAlatById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await prisma.transaksiAlat.findUnique({
      where: { id: Number(id) },
      include: {
        alat: true,
      },
    });

    if (!transaksi)
      return res.status(404).json({ error: "Transaksi tidak ditemukan" });
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Tambah transaksi alat baru
exports.createTransaksiAlat = async (req, res) => {
  try {
    const { id_alat, jumlah, tanggal_transaksi, status, keterangan } = req.body;

    const newTransaksi = await prisma.transaksiAlat.create({
      data: {
        id_alat,
        jumlah,
        tanggal_transaksi: new Date(tanggal_transaksi),
        status,
        keterangan,
      },
    });

    res.status(201).json(newTransaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update transaksi alat berdasarkan ID
exports.updateTransaksiAlat = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_alat, jumlah, tanggal_transaksi, status, keterangan } = req.body;

    const updatedTransaksi = await prisma.transaksiAlat.update({
      where: { id: Number(id) },
      data: {
        id_alat,
        jumlah,
        tanggal_transaksi: new Date(tanggal_transaksi),
        status,
        keterangan,
      },
    });

    res.json(updatedTransaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Hapus transaksi alat berdasarkan ID
exports.deleteTransaksiAlat = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.transaksiAlat.delete({ where: { id: Number(id) } });
    res.json({ message: "Transaksi berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
