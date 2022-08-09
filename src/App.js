import { Route , Switch} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PriceOfferings from "./pages/Price Offerings";
import Navbar from "./components/Navbar";
import Archive from "./pages/Archive";
import Support from "./pages/Support";

function App() {
  return (
    <div>
      <Navbar/>  
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/PriceOfferings">
          <PriceOfferings />
        </Route>
        <Route path="/Archive">
          <Archive />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
