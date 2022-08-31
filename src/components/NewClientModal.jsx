import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Alert } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useRef, useState } from "react";
import { useIntl } from "react-intl";
import { insert } from "./../hooks/useDatabase";


function NewClientModal(props) {
    const { show, onHide, setSelectedClient, setAlert } = props;
    const clientNameRef = useRef();
    const clientContactNameRef = useRef();
    const clientContactNumberRef = useRef();
    const clientIndustryRef = useRef();
    const clientAddressRef = useRef();
    const [added, setAdded] = useState(false);

    // const val = useIntl().formatMessage({id: "newClient"});


    async function handleSubmit(event) {

        event.preventDefault();
        const clientName = clientNameRef.current.value;
        const clientContactName = clientContactNameRef.current.value;
        const clientContactNumber = clientContactNumberRef.current.value;
        const clientIndustry = clientIndustryRef.current.value;
        const clientAddress = clientAddressRef.current.value;
        const client = {
            clientName,
            clientContactName,
            clientContactNumber,
            clientIndustry,
            clientAddress
        };
        insert("newClients", client).then(() => {

          setAdded(true);
          console.log("added");
          
        }).catch(err => {
          console.log(err);
        }
        );
        setAlert(true);
        // console.log(client);
        setSelectedClient(clientName);
        onHide();
    }

    
    return (
      <Modal
        show={show}
        style={
          localStorage.getItem("locale") === "ar-EG"
            ? { direction: "rtl" }
            : { direction: "ltr" }
        }
      >

        <Modal.Header>
          <Modal.Title>
            <FormattedMessage id="addNewClient" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="clientName">
                <FormattedMessage id="clientName" />
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="clientName"
                placeholder={useIntl().formatMessage({ id: "clientName" })}
                ref={clientNameRef}
                required={true}
              />
            </Form.Group>
            <Form.Group id="contactInfo">
              <Form.Label htmlFor="clientContactName">
                <FormattedMessage id="clientContactName" />
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="clientContactName"
                placeholder={useIntl().formatMessage({
                  id: "clientContactName",
                })}
                ref={clientContactNameRef}
                required={true}
              />

              <Form.Label htmlFor="clientContactNumber">
                <FormattedMessage id="clientContactNumber" />
              </Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]{11}"
                className="form-control"
                id="clientContactNumber"
                placeholder="01XXXXXXXXX"
                required={true}
                ref={clientContactNumberRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="clientIndustry">
                <FormattedMessage id="clientIndustry" />
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="clientIndustry"
                placeholder={useIntl().formatMessage({id: "clientIndustry"})}
                required={true}
                ref={clientIndustryRef}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="clientAddress">
                <FormattedMessage id="clientAddress" />
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="clientAddress"
                placeholder={useIntl().formatMessage({id: "clientAddress"})}
                required={true}
                ref={clientAddressRef}
              />
            </Form.Group>

            <Modal.Footer>
              <Button
                style={{
                  padding: "5px",
                  marginTop: "20px",
                  backgroundColor: "#cc2c2c",
                }}
                type="submit"
              >
                <FormattedMessage id="addNewClient" />
              </Button>

              <Button
                style={{
                  padding: "5px",
                  marginTop: "20px",
                  backgroundColor: "#000000",
                }}
                onClick={onHide}
              >
                <FormattedMessage id="cancel" />
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
}


export default NewClientModal;