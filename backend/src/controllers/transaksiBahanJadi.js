const prisma = require("../db");

// 📌 Ambil semua transaksi bahan jadi
exports.getAllTransaksiBahanJadi = async (req, res) => {
  try {
    const transaksi = await prisma.transaksiBahanJadi.findMany({
      include: {
        bahanJadi: true, // Join ke tabel bahan_jadi
        client: true, // Join ke tabel client
      },
    });
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Ambil transaksi bahan jadi berdasarkan ID
exports.getTransaksiBahanJadiById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await prisma.transaksiBahanJadi.findUnique({
      where: { id: Number(id) },
      include: {
        bahanJadi: true,
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

// 📌 Tambah transaksi bahan jadi baru
exports.createTransaksiBahanJadi = async (req, res) => {
  try {
    const {
      id_bahan_jadi,
      jumlah,
      tanggal_transaksi,
      status,
      id_client,
      keterangan,
    } = req.body;

    const newTransaksi = await prisma.transaksiBahanJadi.create({
      data: {
        id_bahan_jadi,
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

// 📌 Update transaksi bahan jadi berdasarkan ID
exports.updateTransaksiBahanJadi = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_bahan_jadi,
      jumlah,
      tanggal_transaksi,
      status,
      id_client,
      keterangan,
    } = req.body;

    const updatedTransaksi = await prisma.transaksiBahanJadi.update({
      where: { id: Number(id) },
      data: {
        id_bahan_jadi,
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

// 📌 Hapus transaksi bahan jadi berdasarkan ID
exports.deleteTransaksiBahanJadi = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.transaksiBahanJadi.delete({ where: { id: Number(id) } });
    res.json({ message: "Transaksi berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
