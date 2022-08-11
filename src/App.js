import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PriceOfferings from "./pages/Price Offerings";
import Navbar from "./components/Navbar";
import Archive from "./pages/Archive";
import Support from "./pages/Support";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
// import { useLang } from "./contexts/langContext";
// import { useEffect, useState } from "react";

function App() {
  // const { selectLang } = useLang();

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
        {/* <select onChange={selectLang}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select> */}
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute
            exact
            path="/PriceOfferings"
            component={PriceOfferings}
          />
          <PrivateRoute exact path="/Archive" component={Archive} />
          <PrivateRoute exact path="/Support" component={Support} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
