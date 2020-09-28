import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import {
  Header,
  CustomerListContainer,
  CustomerContainer,
  CustomerInfo,
  RowSpaced,
} from "../style/styledComponents";

export default function CustomerList() {
  const { customerList, getCustomerList } = useContext(UserContext);

  useEffect(() => {
    getCustomerList();
  }, []);

  if (customerList.length > 0) {
    return (
      <CustomerListContainer>
        <Header>Customers</Header>
        {customerList.map((customer, index) => {
          return (
            <div key={index}>
              <Link
                to={`/home/${customer.id}`}
                style={{ textDecoration: "none" }}
              >
                <CustomerContainer>
                  <RowSpaced>
                    <CustomerInfo>{customer.name}</CustomerInfo>
                    <CustomerInfo>{customer.organisationNr}</CustomerInfo>
                  </RowSpaced>
                  <CustomerInfo>{customer.reference}</CustomerInfo>
                </CustomerContainer>
              </Link>
            </div>
          );
        })}
      </CustomerListContainer>
    );
  } else {
    return (
      <CustomerListContainer>
        <Header>Customers</Header>
        <p>No customers</p>
      </CustomerListContainer>
    );
  }
}
