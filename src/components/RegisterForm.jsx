import React, { useState } from "react";
import UserKit from "../data/UserKit";
import {
  Header,
  Container,
  SubHeader,
  Input,
  FormButton,
} from "../style/styledComponents";

export default function RegisterForm() {
  const userKit = new UserKit();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgKind, setOrgKind] = useState("");

  const inputObjects = [
    ["FirstName", firstName, setFirstName],
    ["LastName", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", orgName, setOrgName],
    ["Organisation Kind (0, 1, 2)", orgKind, setOrgKind],
  ];

  const renderInput = (placeholder, stateVariable, setStateVariable, index) => {
    if (placeholder === "Password") {
      return (
        <div key={index}>
          <Input
            placeholder={placeholder}
            value={stateVariable}
            type="password"
            onChange={(e) => setStateVariable(e.target.value)}
          />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <Input
            placeholder={placeholder}
            value={stateVariable}
            onChange={(e) => setStateVariable(e.target.value)}
          />
        </div>
      );
    }
  };

  const handleRegister = () => {
    userKit.register(firstName, lastName, email, password, orgName, orgKind);
  };

  return (
    <Container>
      <Header>Register</Header>
      <SubHeader>Enter details to register</SubHeader>
      {inputObjects.map((inputItem, index) => {
        return renderInput(inputItem[0], inputItem[1], inputItem[2], index);
      })}
      <FormButton onClick={handleRegister}>Register</FormButton>
    </Container>
  );
}
