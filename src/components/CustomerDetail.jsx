import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserKit from "../data/UserKit";
import {
  Header,
  SubHeader,
  FormButton,
  CustomerInfoContainer,
} from "../style/styledComponents";

export default function CustomerDetail({ setEditMode }) {
  const userKit = new UserKit();

  const [selectedCustomer, setSelectedCustomer] = useState([]);

  const { id } = useParams();

  const getCustomer = () => {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCustomer(data);
      });
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div>
      <Header>{selectedCustomer.name}</Header>
      <CustomerInfoContainer>
        <SubHeader>Organisation number</SubHeader>
        <p>{selectedCustomer.organisationNr}</p>
      </CustomerInfoContainer>
      <CustomerInfoContainer>
        <SubHeader>Vat number</SubHeader>
        <p>{selectedCustomer.vatNr}</p>
      </CustomerInfoContainer>
      <CustomerInfoContainer>
        <SubHeader>Reference</SubHeader>
        <p>{selectedCustomer.reference}</p>
      </CustomerInfoContainer>
      <CustomerInfoContainer>
        <SubHeader>Payment term</SubHeader>
        <p>{selectedCustomer.paymentTerm}</p>
      </CustomerInfoContainer>
      <CustomerInfoContainer>
        <SubHeader>Website</SubHeader>
        <p>{selectedCustomer.website}</p>
      </CustomerInfoContainer>
      <CustomerInfoContainer>
        <SubHeader>Email</SubHeader>
        <p>{selectedCustomer.email}</p>
      </CustomerInfoContainer>
      <CustomerInfoContainer>
        <SubHeader>Phone number</SubHeader>
        <p>{selectedCustomer.phoneNumber}</p>
      </CustomerInfoContainer>
      <FormButton onClick={() => setEditMode(true)}>Edit</FormButton>
    </div>
  );
}
