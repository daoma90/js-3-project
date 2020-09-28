import React, { useContext, useEffect } from "react";
import UserKit from "../data/UserKit";
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router-dom";
import {
  Nav,
  NavButton,
  Row,
  UserInfoContainer,
} from "../style/styledComponents";

export default function Navbar({ children }) {
  const userKit = new UserKit();

  const history = useHistory();

  const { userInfo, setUserInfo } = useContext(UserContext);

  const getUserInfo = () => {
    userKit
      .getUserInfo()
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const goToHomePage = () => {
    history.push("/home");
  };

  return (
    <div className="hello">
      <Nav>
        <NavButton onClick={() => goToHomePage()}>Home</NavButton>

        <UserInfoContainer>
          <Row>
            <p className="userInfo-first">{userInfo.firstName}</p>
            <p>{userInfo.lastName}</p>
          </Row>
          <p>{userInfo.email}</p>
        </UserInfoContainer>
      </Nav>
      {children}
    </div>
  );
}
