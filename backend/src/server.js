require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const port = process.env.PORT || 5001;

// Load the Swagger file
const swaggerDocument = YAML.load("./src/tests/swagger.yaml"); // Corrected path

// Routes Import
const bahanJadiRoutes = require("./routes/bahanJadi");
const bahanMentahRoutes = require("./routes/bahanMentah");
const klienRoutes = require("./routes/klien");
const transaksiBahanMentahRoutes = require("./routes/transaksiBahanMentah");
const transaksiBahanJadiRoutes = require("./routes/transaksiBahanJadi");
const alatRoutes = require("./routes/alat");
const transaksiAlatRoutes = require("./routes/transaksiAlat");

const app = express();
app.use(cors());
app.use(express.json());

// Serve the Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/bahan-mentah", bahanMentahRoutes);
app.use("/bahan-jadi", bahanJadiRoutes);
app.use("/klien", klienRoutes);
app.use("/transaksi-mentah", transaksiBahanMentahRoutes);
app.use("/transaksi-jadi", transaksiBahanJadiRoutes);
app.use("/alat", alatRoutes);
app.use("/transaksi-alat", transaksiAlatRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
