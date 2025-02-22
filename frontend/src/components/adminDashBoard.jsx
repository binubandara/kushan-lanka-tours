import React from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Dashboard, Group, Receipt, Logout } from "@mui/icons-material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  // Chart Data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Tour Bookings",
        data: [120, 150, 200, 180, 250, 300],
        backgroundColor: ["#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#28a745"],
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 d-flex flex-column justify-content-between" style={{ width: "250px" }}>
        <div>
          <h4 className="text-center mb-4" style={{ color: "#0d6efd" }}>Admin Panel</h4>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">
              <Dashboard /> Dashboard
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <Group /> Users
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <Receipt /> Bookings
            </Nav.Link>
          </Nav>
        </div>
        
        {/* Logout Button - Now in #0d6efd */}
        <Button 
          style={{ 
            backgroundColor: "#0d6efd", 
            border: "none", 
            color: "white", 
            padding: "10px 20px",
            fontSize: "16px"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#0b5ed7"} // Darker blue on hover
          onMouseLeave={(e) => e.target.style.backgroundColor = "#0d6efd"} // Reset color on mouse leave
        >
          <Logout /> Logout
        </Button>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4">
        <Navbar bg="light" className="shadow-sm mb-4">
          <Container>
            <Navbar.Brand style={{ color: "#0d6efd" }}>Admin Dashboard</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Stats Cards */}
        <Row>
          <Col md={4}>
            <Card className="shadow-sm border-0">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 style={{ color: "#0d6efd" }}>Total Bookings</h6>
                  <h3>245</h3>
                </div>
                <Receipt style={{ fontSize: 40, color: "#0d6efd" }} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 style={{ color: "#0d6efd" }}>Total Users</h6>
                  <h3>1,230</h3>
                </div>
                <Group style={{ fontSize: 40, color: "#0d6efd" }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Chart Section */}
        <Row className="mt-4">
          <Col md={8}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h5 style={{ color: "#0d6efd" }}>Monthly Bookings</h5>
                <Bar data={chartData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
