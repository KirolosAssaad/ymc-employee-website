import "./PriceOfferings.css";
import React, { useRef, useState, useEffect } from "react";
import Select from "react-select";
import { Form, Button, Alert } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { LoadinScreen } from "../components/loadingScreen";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import NewClientModal from "../components/NewClientModal";
import * as apis from "./../API/clientAPI";
import useApi from "./../hooks/useApi";

function PriceOfferings() {
  const [clients, setClients] = useState([]);
  // const passwordRef = useRef();
  const optionList = clients
  const [show, setShow] = useState(false);
  const [clientChoice, setclientChoice] = useState("oldClients");
  const [selectedClient, setSelectedClient] = useState("");
  const [alert, setAlert] = useState(false);

  const getClients = useApi(apis.getClients, (res) =>
    {
      const result = res.map(({ VALUE: value, LABEL: label }) => ({
    value, label}));
    setClients(result);
    }
  );

  useEffect(() => {
    getClients.request();
  }, []);

    useEffect(() => {
      console.log(alert);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }, [alert]);

  const handleChange = (value) => {
    setSelectedClient(value.label);  
  };

  function handleClientSelect(event, data) {
    if (data !== null) 
    setclientChoice(data);
  }

  function handleShow() {
    setShow(true);
  }

    function handleHide() {
      setShow(false);
    }



    return (
      <div
        className="offeringsDiv"
        style={
          localStorage.getItem("locale") === "ar-EG"
            ? { direction: "rtl" }
            : { direction: "ltr" }
        }
      >

        {alert && <Alert show={alert} variant="success">
          <FormattedMessage id="newClientAdded"/>
          </Alert>}
        {getClients.loading && <LoadinScreen />}
        <Form className="formDiv">
          <Form.Group
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Form.Label style={{ paddingRight: "1rem" }}>
              <FormattedMessage id="client" />:
            </Form.Label>
            {selectedClient !== "" && (
              <>
                <Form.Label>
                  <strong
                    style={{
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {selectedClient}
                  </strong>
                </Form.Label>
                <div
                  style={{ color: "red", textDecoration: "underline" }}
                  clickable="true"
                  onClick={() => {
                    setSelectedClient("");
                  }}
                >
                  <FormattedMessage id="removeChoice" />
                </div>
              </>
              // <Form.Select
              //   value={selectedClient}
              //   onChange={handleChange}
              //   isSearchable={true}
              //   style={{ width: "20rem" }}
              // >
              //   {clients.map((client) => (
              //     <option key={client.value} value={client.value}>
              //       {client.label}
              //     </option>
              //   ))}
              // </Form.Select>
            )}
            {selectedClient === "" && (
              <ToggleButtonGroup
                orientation="vertical"
                value={clientChoice}
                exclusive={true}
                onChange={handleClientSelect}
                style={{ padding: "0.5rem" }}
              >
                <ToggleButton value="oldClients">
                  <FormattedMessage id="oldClients" />
                </ToggleButton>
                <ToggleButton value="newClients">
                  <FormattedMessage id="newClients" />
                </ToggleButton>
              </ToggleButtonGroup>
            )}
            {clientChoice === "oldClients" && selectedClient === "" && (
              <Select
                style={{ width: "10rem" }}
                options={optionList}
                placeholder="Select Client  "
                value={selectedClient}
                onChange={handleChange}
                isSearchable={true}
              />
            )}

            {clientChoice === "newClients" && selectedClient === "" && (
              <Button variant="outline-primary" onClick={handleShow}>
                <FormattedMessage id="addNewClients" />
              </Button>
            )}

            {/* <Form.Control type="email" ref={emailRef} required /> */}
          </Form.Group>

          <NewClientModal
            show={show}
            onHide={handleHide}
            setSelectedClient={setSelectedClient}
            setAlert={setAlert}
          />
          {/* <Form.Group id="password">
            <Form.Label>
              <FormattedMessage id="password" />
            </Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group> */}
        </Form>
      </div>
    );
  }
  export default PriceOfferings;
