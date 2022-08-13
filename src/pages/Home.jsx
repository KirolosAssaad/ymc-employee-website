import { useLoading } from "../contexts/loadingContext";
import { LoadinScreen } from "../components/loadingScreen";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

export default function Home() {
  const { loading, setLoading } = useLoading();
  // setLoading(true);
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "black",
        height: "100vh",
        padding: "0.5rem",
      }}
    >
      {loading && <LoadinScreen />}
      <Button
        style={{
          width: "16vw",
          height: "12vh",
          borderRadius: "0rem",
          fontSize: "1rem",
          padding: "0.5rem",
          margin: "0.5rem",
          backgroundColor: "#cc2c2c",
          borderColor: "#cc2c2c",
        }}
        onClick={() => {
          handleClick("/priceOfferings");
        }}
      >
        <FormattedMessage id="priceOfferings" />
      </Button>
      <Button
        style={{
          width: "16vw",
          height: "12vh",
          borderRadius: "0rem",
          fontSize: "1rem",
          padding: "0.5rem",
          margin: "0.5rem",
          backgroundColor: "#cc2c2c",
          borderColor: "#cc2c2c",
        }}
        onClick={() => {
          handleClick("/archive");
        }}
      >
        <FormattedMessage id="archive" />
      </Button>
      <Button
        style={{
          width: "16vw",
          height: "12vh",
          borderRadius: "0rem",
          fontSize: "1rem",
          padding: "0.5rem",
          margin: "0.5rem",
          backgroundColor: "#cc2c2c",
          borderColor: "#cc2c2c",
        }}
        onClick={() => {
          handleClick("/support");
        }}
      >
        <FormattedMessage id="support" />
      </Button>
    </div>
  );
}
