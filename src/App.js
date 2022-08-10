import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PriceOfferings from "./pages/Price Offerings";
import Navbar from "./components/Navbar";
import Archive from "./pages/Archive";
import Support from "./pages/Support";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute path="/Home" component={Home} />
          <PrivateRoute path="/PriceOfferings" component={PriceOfferings} />
          <PrivateRoute path="/Archive" component={Archive} />
          <PrivateRoute path="/Support" component={Support} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
