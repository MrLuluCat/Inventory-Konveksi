const prisma = require("../db");

// 📌 Ambil semua transaksi bahan mentah
exports.getAllTransaksiBahanMentah = async (req, res) => {
  try {
    const transaksi = await prisma.transaksiBahanMentah.findMany({
      include: {
        bahanMentah: true, // Join ke tabel bahan_mentah
        client: true, // Join ke tabel client
      },
    });
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil transaksi bahan mentah berdasarkan ID
exports.getTransaksiBahanMentahById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await prisma.transaksiBahanMentah.findUnique({
      where: { id: Number(id) },
      include: {
        bahanMentah: true,
        client: true,
      },
    });

    if (!transaksi)
      return res.status(404).json({ error: "Transaksi tidak ditemukan" });
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Tambah transaksi bahan mentah baru
exports.createTransaksiBahanMentah = async (req, res) => {
  try {
    const {
      id_bahan_mentah,
      jumlah,
      tanggal_transaksi,
      status,
      id_client,
      keterangan,
    } = req.body;

    const newTransaksi = await prisma.transaksiBahanMentah.create({
      data: {
        id_bahan_mentah,
        jumlah,
        tanggal_transaksi: new Date(tanggal_transaksi),
        status,
        id_client,
        keterangan,
      },
    });

    res.status(201).json(newTransaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update transaksi bahan mentah berdasarkan ID
exports.updateTransaksiBahanMentah = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_bahan_mentah,
      jumlah,
      tanggal_transaksi,
      status,
      id_client,
      keterangan,
    } = req.body;

    const updatedTransaksi = await prisma.transaksiBahanMentah.update({
      where: { id: Number(id) },
      data: {
        id_bahan_mentah,
        jumlah,
        tanggal_transaksi: new Date(tanggal_transaksi),
        status,
        id_client,
        keterangan,
      },
    });

    res.json(updatedTransaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Hapus transaksi bahan mentah berdasarkan ID
exports.deleteTransaksiBahanMentah = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.transaksiBahanMentah.delete({ where: { id: Number(id) } });
    res.json({ message: "Transaksi Bahan Mentah berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
