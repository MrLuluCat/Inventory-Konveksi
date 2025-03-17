import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BahanMentah from "./components/BahanMentah";
import BahanJadi from "./components/BahanJadi";

function App() {
  return (
    <Router>
      <div id="wrapper" style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div id="content-wrapper" style={{ width: "100%" }}>
          <div id="content">
            <Navbar />
            <Container fluid style={{ marginTop: "20px" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/bahan-mentah" element={<BahanMentah />} />
                <Route path="/bahan-jadi" element={<BahanJadi />} />
              </Routes>
            </Container>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
