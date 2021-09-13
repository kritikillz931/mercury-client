import { Sidebar } from "./sidebar/sidebar";
import { Topbar } from "./topbar/Topbar";
import "./Mercury.css"
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserList } from "./pages/userList/userList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/newUser";
import React from "react"
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const Mercury = () => {
  return (
    <>
        <Route render={() => {
            if (localStorage.getItem("m_token")) {
                return <>
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
              return <Redirect to="/login" />
            
          }
        }} />
                    <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
        </>
  );
}

