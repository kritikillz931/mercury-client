import { Sidebar } from "./sidebar/sidebar";
import { Topbar } from "./topbar/Topbar";
import "./Mercury.css"
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./pages/userList/userList";


export const Mercury = () => {
  return (
    <Router>
      <Topbar/>
    <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

