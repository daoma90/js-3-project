import React from "react";
import AddCustomerForm from "../components/AddCustomerForm";
import CustomerList from "../components/CustomerList";
import { HomeContainer } from "../style/styledComponents";

export default function HomePage() {
  return (
    <HomeContainer>
      <AddCustomerForm />
      <CustomerList />
    </HomeContainer>
  );
}
