import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Card className="bg-primary text-white mb-4">
            <Card.Body>
              <h4>Raw Materials</h4>
              <p>120 items</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="bg-success text-white mb-4">
            <Card.Body>
              <h4>Finished Goods</h4>
              <p>200 items</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
