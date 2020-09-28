import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomerDetail from "../components/CustomerDetail";
import CustomerDetailEdit from "../components/CustomerDetailEdit";
import UserKit from "../data/UserKit";
import { CustomerDetailContainer, FormButton } from "../style/styledComponents";

export default function CustomerPage(props) {
  const userKit = new UserKit();
  const history = useHistory();

  const [editMode, setEditMode] = useState(false);
  const customerId = props.match.params.id;

  return (
    <CustomerDetailContainer>
      {!editMode ? (
        <CustomerDetail setEditMode={setEditMode} />
      ) : (
        <CustomerDetailEdit setEditMode={setEditMode} />
      )}
      <FormButton
        warning
        onClick={() => {
          userKit.deleteCustomer(customerId);
          history.push("/home");
        }}
      >
        Delete
      </FormButton>
    </CustomerDetailContainer>
  );
}
