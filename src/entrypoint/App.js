import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SearchScreen from "../screens/SearchScreen";
import PackageInfoScreen from "../screens/PackageInfoScreen";
import LogScreen from "../screens/LogScreen";
import CityBlacklistScreen from "../screens/CityBlacklistScreen";
import ContactScreen from "../screens/ContactScreen";
import { useDispatch } from "react-redux";
import { fetchLog } from "../redux/slices/searchSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchLog());

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/info">Package Info</Link>
            </li>
            <li>
              <Link to="/records">Records</Link>
            </li>
            <li>
              <Link to="/cities">Cities blacklist</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <SearchScreen />
          </Route>
          <Route path="/info">
            <PackageInfoScreen />
          </Route>
          <Route path="/records">
            <LogScreen />
          </Route>
          <Route path="/cities">
            <CityBlacklistScreen />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
          <Route path="/">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
