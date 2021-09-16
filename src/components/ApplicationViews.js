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
import { FeaturedInfoProvider } from "./featuredInfo/featuredInfoProvider";
import { ChartData } from "./charts/ChartData";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { ProductProvider } from "./products/ProductsProvider";
import { TransactionProvider } from "./pages/transactions/TransactionsProvider";
import { ProductList } from "./products/ProductsList"
import { ProductDetails } from "./products/ProductDetails"
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeDetails } from "./employees/EmployeeDetails"




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
        <FeaturedInfoProvider>
            <ProductProvider>
          <EmployeeProvider>
            <TransactionProvider>

              


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
        <Route path="/Products">
          <ProductList/>
        </Route>
        <Route path="/Products/Details">
          <ProductDetails/>
        </Route>
        <Route exact path="/employees">
          <EmployeeList/>
        </Route>
        <Route exact path="/employees/employeeDetail/:employeeId(\d+)">
          <EmployeeDetails/>
        </Route>
            </TransactionProvider>
          </EmployeeProvider>
            </ProductProvider>
        </FeaturedInfoProvider>
      </Switch>

    </div>
    </Router>

        </main>
    </>
}