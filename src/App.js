import { useEffect } from "react";
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PriceOfferings from "./pages/Price Offerings";
import Navbar from "./components/Navbar";
import Archive from "./pages/Archive";
import Support from "./pages/Support";
import { BaseRoute, PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/loadingContext";
import { useLang } from "./contexts/langContext";

function App() {
  const {selectLang} = useLang();
useEffect(() => {
  console.log(localStorage.getItem("locale"));
  if (localStorage.getItem("locale") === undefined) {
    localStorage.setItem("locale", "ar-EG");
    selectLang("ar-EG");
  } else {
    selectLang(localStorage.getItem("locale"));
  }
}, [selectLang]);

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
        <LoadingProvider>
          <Navbar />
          <Switch>
            <BaseRoute exact path="/login" component={SignIn} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute
              exact
              path="/PriceOfferings"
              component={PriceOfferings}
            />
            <PrivateRoute exact path="/Archive" component={Archive} />
            <PrivateRoute exact path="/Support" component={Support} />
          </Switch>
        </LoadingProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
