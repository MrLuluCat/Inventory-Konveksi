import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Table, Card } from "react-bootstrap";

const BahanJadi = () => {
  const [bahanJadi, setBahanJadi] = useState([]);
  const [newGood, setNewGood] = useState({ nama: "", stok: "", size: "" });

  useEffect(() => {
    fetchBahanJadi();
  }, []);

  const fetchBahanJadi = async () => {
    const response = await axios.get("http://localhost:5000/bahan-jadi");
    setBahanJadi(response.data);
  };

  const handleAddGood = async () => {
    await axios.post("http://localhost:5000/bahan-jadi", newGood);
    fetchBahanJadi(); // Refresh the list
    setNewGood({ nama: "", stok: "", size: "" }); // Clear input fields
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h4>Bahan Jadi</h4>
          <div>
            <Form>
              <Form.Group controlId="formNama">
                <Form.Label>Nama Bahan Jadi</Form.Label>
                <Form.Control
                  type="text"
                  value={newGood.nama}
                  onChange={(e) =>
                    setNewGood({ ...newGood, nama: e.target.value })
                  }
                  placeholder="Enter good name"
                />
              </Form.Group>
              <Form.Group controlId="formStok">
                <Form.Label>Stok</Form.Label>
                <Form.Control
                  type="number"
                  value={newGood.stok}
                  onChange={(e) =>
                    setNewGood({ ...newGood, stok: e.target.value })
                  }
                  placeholder="Enter stock quantity"
                />
              </Form.Group>
              <Form.Group controlId="formSize">
                <Form.Label>Ukuran</Form.Label>
                <Form.Control
                  type="text"
                  value={newGood.size}
                  onChange={(e) =>
                    setNewGood({ ...newGood, size: e.target.value })
                  }
                  placeholder="Enter size"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAddGood}>
                Tambah Bahan Jadi
              </Button>
            </Form>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Stok</th>
                <th>Ukuran</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bahanJadi.map((good) => (
                <tr key={good.id}>
                  <td>{good.nama}</td>
                  <td>{good.stok}</td>
                  <td>{good.size}</td>
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

export default BahanJadi;
