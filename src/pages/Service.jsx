import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaBus, FaCar, FaPlane, FaUmbrellaBeach, FaCheckCircle } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const Service = () => {
  const services = [
    { icon: <FaBus size={40} />, title: 'Sewa Bus', description: 'Layanan bus nyaman untuk perjalanan kelompok dan tur.' },
    { icon: <FaCar size={40} />, title: 'Rental Mobil', description: 'Berbagai pilihan mobil untuk perjalanan pribadi atau bisnis Anda.' },
    { icon: <FaPlane size={40} />, title: 'Antar-Jemput Bandara', description: 'Layanan antar-jemput bandara yang dapat diandalkan.' },
    { icon: <FaUmbrellaBeach size={40} />, title: 'Paket Wisata', description: 'Nikmati perjalanan wisata yang menyenangkan dan terjangkau.' },
  ]

  const features = [
    'Pengemudi Berpengalaman',
    'Armada Modern',
    'Dukungan 24/7',
    'Solusi Disesuaikan',
  ]

  return (
    <Container className="my-5 py-5 bg-light rounded shadow">
      <h1 className="text-center text-danger fw-bold mb-4">Layanan Kami</h1>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <Card className="h-100 border-0 shadow-sm transition-hover">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="bg-danger text-white rounded-circle p-3 mb-3">
                  {service.icon}
                </div>
                <Card.Title className="text-center fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-center">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt-5">
        <h2 className="text-center text-dark fw-bold mb-4">Mengapa Memilih BR Trans?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-danger me-2" size={20} />
                <span>{feature}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default Service
