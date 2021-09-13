import { Sidebar } from "./sidebar/sidebar";
import { Topbar } from "./topbar/Topbar";
import "./Mercury.css"
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./pages/userList/userList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/newUser";
import React from "react"
import { Login } from "./auth/Login";




export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
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
        <Route path="/user/:userId">
          <User/>
        </Route>
        <Route path="/newUser">
          <NewUser/>
        </Route>
      </Switch>

    </div>
    </Router>

        </main>
    </>
}