import React from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ContactForm() {
  return (
    <div className="formStyle p-4">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <FloatingLabel
              controlId="floatingInputName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                required
                className=""
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputEmail"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                required
                className=""
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTextareaMessage"
              label="Message"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                rows={6}
                required
                className="resize-vertical"
              />
            </FloatingLabel>

            <Button variant="primary" type="submit" className="custom-button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ContactForm;
