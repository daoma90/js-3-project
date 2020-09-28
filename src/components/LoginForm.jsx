import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import {
  Header,
  Container,
  Input,
  FormButton,
} from "../style/styledComponents";

export default function LoginForm() {
  const userKit = new UserKit();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const handleActivateUser = () => {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  };

  const handleLogin = () => {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.token);
        userKit.setToken(data.token);
        history.push("/home");
      });
  };

  return (
    <div>
      {uid && token ? (
        <Container>
          <Header>Activate Account</Header>
          <FormButton onClick={handleActivateUser}>Activate User</FormButton>
        </Container>
      ) : (
        <Container>
          <Header>Login</Header>
          <Input
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <FormButton onClick={handleLogin}>Login</FormButton>
        </Container>
      )}
    </div>
  );
}
