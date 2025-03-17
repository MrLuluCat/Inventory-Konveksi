import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Table, Card } from "react-bootstrap";

const BahanMentah = () => {
  const [bahanMentah, setBahanMentah] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ nama: "", stok: "" });

  useEffect(() => {
    fetchBahanMentah();
  }, []);

  const fetchBahanMentah = async () => {
    const response = await axios.get("http://localhost:5000/bahan-mentah");
    setBahanMentah(response.data);
  };

  const handleAddMaterial = async () => {
    try {
      // Ensure stok is a number (parse to integer)
      const materialData = {
        nama: newMaterial.nama,
        stok: parseInt(newMaterial.stok, 10), // Convert stok to integer
      };

      const response = await axios.post(
        "http://localhost:5000/bahan-mentah",
        materialData
      );
      console.log(response.data); // Check the response
      fetchBahanMentah(); // Refresh the list
      setNewMaterial({ nama: "", stok: "" }); // Clear input fields
    } catch (error) {
      console.error("There was an error with the POST request:", error);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h4>Bahan Mentah</h4>
          <div>
            <Form>
              <Form.Group controlId="formNama">
                <Form.Label>Nama Material</Form.Label>
                <Form.Control
                  type="text"
                  value={newMaterial.nama}
                  onChange={(e) =>
                    setNewMaterial({ ...newMaterial, nama: e.target.value })
                  }
                  placeholder="Enter material name"
                />
              </Form.Group>
              <Form.Group controlId="formStok">
                <Form.Label>Stok</Form.Label>
                <Form.Control
                  type="number"
                  value={newMaterial.stok}
                  onChange={(e) =>
                    setNewMaterial({ ...newMaterial, stok: e.target.value })
                  }
                  placeholder="Enter stock quantity"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAddMaterial}>
                Tambah Material
              </Button>
            </Form>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bahanMentah.map((material) => (
                <tr key={material.id}>
                  <td>{material.nama}</td>
                  <td>{material.stok}</td>
                  <td>
                    <Button variant="danger">Hapus</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BahanMentah;
