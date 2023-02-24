import React from "react";
import { Col, Container, Row, Button} from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">TIDAK PAKAI KARCIS</div>
            <div className="introbutton mt-4 text-center">
                <Button variant="dark" href="#trending">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
