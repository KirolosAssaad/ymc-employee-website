import "./PriceOfferings.css";
import React, { useRef, useState } from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";


function PriceOfferings() {
  const passwordRef = useRef();
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
  ];
const [selectedOptions, setSelectedOptions] = useState();

  const [clientChoice, setclientChoice] = useState("oldClients");
  const handleChange = (value) => {
    setSelectedOptions(value);
    
  };
  function handleClientSelect(event, data) {
    if (data !== null) 
    setclientChoice(data);
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
        <Form className="formDiv">
          <Form.Group style={{ display: "flex", flexDirection: "row" }}>
            <Form.Label style={{ paddingRight: "1rem" }}>
              <FormattedMessage id="client" />
            </Form.Label>
            <ToggleButtonGroup
              orientation="vertical"
              value={clientChoice}
              exclusive={true}
              onChange={handleClientSelect}
            >
              <ToggleButton value="oldClients">
                <FormattedMessage id="oldClients" />
              </ToggleButton>
              <ToggleButton value="newClients">
                <FormattedMessage id="newClients" />
              </ToggleButton>
            </ToggleButtonGroup>
            {clientChoice === "oldClients" && (
              <Select
                style={{ width: "100pt" }}
                options={optionList}
                placeholder="Select color"
                value={selectedOptions}
                onChange={handleChange}
                isSearchable={true}
              />
            )}
            {/* <Form.Control type="email" ref={emailRef} required /> */}
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>
              <FormattedMessage id="password" />
            </Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
        </Form>
      </div>
    );
  }
  export default PriceOfferings;
