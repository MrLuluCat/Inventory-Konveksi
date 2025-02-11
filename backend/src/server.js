const express = require("express");
const cors = require("cors");
const bahanJadiRoutes = require("./routes/bahanJadi");
const bahanMentahRoutes = require("./routes/bahanMentah");
const klienRoutes = require("./routes/klien");
const transaksiBahanMentahRoutes = require("./routes/transaksiBahanMentah");
const transaksiBahanJadiRoutes = require("./routes/transaksiBahanJadi");
const alatRoutes = require("./routes/alat");
const transaksiAlatRoutes = require("./routes/transaksiAlat");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/bahan-mentah", bahanMentahRoutes);
app.use("/bahan-jadi", bahanJadiRoutes);
app.use("/klien", klienRoutes);
app.use("/transaksi-mentah", transaksiBahanMentahRoutes);
app.use("/transaksi-jadi", transaksiBahanJadiRoutes);
app.use("/alat", alatRoutes);
app.use("/transaksi-alat", transaksiAlatRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));

module.exports = app;
