const request = require("supertest");
const app = require("../server");

describe("API Testing", () => {
  let idBahanMentah,
    idBahanJadi,
    idKlien,
    idTransaksiBahanMentah,
    idTransaksiBahanJadi,
    idAlat,
    idTransaksiAlat;

  test("Tambah Bahan Mentah", async () => {
    const res = await request(app).post("/bahan-mentah").send({
      nama: "Kayu",
      stok: 50,
    });
    expect(res.statusCode).toBe(201);
    idBahanMentah = res.body.id;
  });

  test("Ambil Semua Bahan Mentah", async () => {
    const res = await request(app).get("/bahan-mentah");
    expect(res.statusCode).toBe(200);
  });

  test("Tambah Bahan Jadi", async () => {
    const res = await request(app).post("/bahan-jadi").send({
      nama: "Meja Kayu",
      stok: 20,
      size: "L",
    });
    expect(res.statusCode).toBe(201);
    idBahanJadi = res.body.id;
  });

  test("Tambah Klien", async () => {
    const res = await request(app).post("/klien").send({
      nama: "PT Maju Sejahtera",
      alamat: "Jalan Merdeka No. 10",
      no_hp: "08123456789",
      kategori: "produsen",
    });
    expect(res.statusCode).toBe(201);
    idKlien = res.body.id;
  });

  test("Tambah Transaksi Bahan Mentah", async () => {
    const res = await request(app).post("/transaksi-mentah").send({
      id_bahan_mentah: idBahanMentah,
      jumlah: 10,
      tanggal_transaksi: "2024-02-10",
      status: "masuk",
      id_client: idKlien,
      keterangan: "Pengadaan bahan mentah",
    });
    expect(res.statusCode).toBe(201);
    idTransaksiBahanMentah = res.body.id;
  });

  test("Tambah Transaksi Bahan Jadi", async () => {
    const res = await request(app).post("/transaksi-jadi").send({
      id_bahan_jadi: idBahanJadi,
      jumlah: 5,
      tanggal_transaksi: "2024-02-11",
      status: "keluar",
      id_client: idKlien,
      keterangan: "Distribusi bahan jadi",
    });
    expect(res.statusCode).toBe(201);
    idTransaksiBahanJadi = res.body.id;
  });

  test("Tambah Alat", async () => {
    const res = await request(app).post("/alat").send({
      nama: "Gergaji",
      jumlah: 10,
      used: 2,
      unused: 7,
      rusak: 1,
    });
    expect(res.statusCode).toBe(201);
    idAlat = res.body.id;
  });

  test("Tambah Transaksi Alat", async () => {
    const res = await request(app).post("/transaksi-alat").send({
      id_alat: idAlat,
      jumlah: 2,
      tanggal_transaksi: "2024-02-12",
      status: "keluar",
      keterangan: "Penggunaan alat",
    });
    expect(res.statusCode).toBe(201);
    idTransaksiAlat = res.body.id;
  });

  test("Update Bahan Mentah", async () => {
    const res = await request(app).put(`/bahan-mentah/${idBahanMentah}`).send({
      nama: "Kayu Jati",
      stok: 60,
    });
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Transaksi Alat", async () => {
    const res = await request(app).delete(`/transaksi-alat/${idTransaksiAlat}`);
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Alat", async () => {
    const res = await request(app).delete(`/alat/${idAlat}`);
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Transaksi Bahan Mentah", async () => {
    const res = await request(app).delete(
      `/transaksi-mentah/${idTransaksiBahanMentah}`
    );
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Transaksi Bahan Jadi", async () => {
    const res = await request(app).delete(
      `/transaksi-jadi/${idTransaksiBahanJadi}`
    );
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Bahan Mentah", async () => {
    const res = await request(app).delete(`/bahan-mentah/${idBahanMentah}`);
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Bahan Jadi", async () => {
    const res = await request(app).delete(`/bahan-jadi/${idBahanJadi}`);
    expect(res.statusCode).toBe(200);
  });

  test("Hapus Klien", async () => {
    const res = await request(app).delete(`/klien/${idKlien}`);
    expect(res.statusCode).toBe(200);
  });
});
