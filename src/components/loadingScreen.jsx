import "./loadingScreen.css";
export const LoadinScreen = () => {
  return (
    <div>
      <div className="overlay">
        <img
          style={{
            height: "40vh",
          }}
          src={require("../Images/loading.gif")}
          alt="laoding"
        />
        <h2>Loading...</h2>
      </div>
    </div>
  );
};
