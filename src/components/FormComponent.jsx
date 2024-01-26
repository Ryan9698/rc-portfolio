/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, FloatingLabel, Container, Row, Col } from "react-bootstrap";
/* Function which sets states and changes states based on user input. If the user does not enter data and clicks off 
an input field, the page will notify the user that they need to enter data. If the user does not enter an e-mail address in 
the form of xyz@xyz, the page will notify the user to input a correct e-mail address. The fields will remove the warning
once the conditions are met. */

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleBlur = (field) => (event) => {
    setTouched({ ...touched, [field]: true });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !isEmailValid(email) || !message) {
      setTouched({ name: true, email: true, message: true });
      return;
    }
  };

  return (
    <div className="p-4">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form noValidate onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInputName" label="Name" className="mb-3">
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={handleBlur('name')}
                  isInvalid={touched.name && !name}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel controlId="floatingInputEmail" label="Email Address" className="mb-3">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur('email')}
                  isInvalid={touched.email && !isEmailValid(email)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextareaMessage" label="Message" className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={handleBlur('message')}
                  isInvalid={touched.message && !message}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </FloatingLabel>

              <button className="resBtn" type="submit">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
