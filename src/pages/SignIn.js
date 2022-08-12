import "bootstrap/dist/css/bootstrap.css";
import React, { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        backgroundImage: require("../Images/Logo.png"),
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(5px)",
        backgroundColor: "#f5f5f5",
        paddingTop: "10vh",
      }}
      className="sign-in"
    >
      <Card
        border="secondary"
        style={{
          width: "30rem",
          margin: "0 auto",
          float: "none",
        }}
      >
        <Card.Header
          style={{
            justifyContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Card.Img
            style={{
              margin: "0 auto",
              height: "udefined",
              width: "50%",
              aspectRatio: "1",
            }}
            variant="top"
            src={require("../Images/Logo.png")}
          />
        </Card.Header>
        <Card.Body>
          {/* <h2 className="text-center mb-4">Log In</h2> */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group style={{ marginBottom: "20px" }} id="email">
              <Form.Label>
                <FormattedMessage id="email" />
              </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>
                <FormattedMessage id="password" />
              </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              style={{
                padding: "5px",
                marginTop: "20px",
                backgroundColor: "#cc2c2c",
              }}
              disabled={loading}
              className="w-100"
              type="submit"
            >
              <FormattedMessage id="login" />
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
