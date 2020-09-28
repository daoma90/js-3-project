import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import CustomerPage from "./pages/CustomerPage";
import { UserContext } from "./contexts/UserContext";
import UserKit from "./data/UserKit";

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const userKit = new UserKit();

  const getCustomerList = () => {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  };
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          userInfo,
          setUserInfo,
          customerList,
          setCustomerList,
          getCustomerList,
        }}
      >
        <Switch>
          <Route
            path="/home/:id"
            render={(props) => {
              return (
                <Navbar>
                  <CustomerPage {...props} />
                </Navbar>
              );
            }}
          ></Route>
          <Route path="/home">
            <Navbar>
              <HomePage />
            </Navbar>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route>
            <RegisterPage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
