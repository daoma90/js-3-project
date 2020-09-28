import React, { useContext } from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/UserContext";
import {
  Header,
  Container,
  Input,
  InputButton,
  Form,
  InputError,
} from "../style/styledComponents";

export default function AddCustomerForm() {
  const userKit = new UserKit();
  const { getCustomerList } = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    userKit
      .addCustomer(
        data.name,
        data.orgNr,
        data.vatNr,
        data.reference,
        data.payTerm,
        data.website,
        data.email,
        data.phone
      )
      .then((res) => {
        if (res.ok) {
          getCustomerList();
        }
      });
    e.target.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>Add New Customer</Header>
        <Input
          name="name"
          placeholder="Company Name"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.name && <InputError>This field is required</InputError>}
        <Input
          name="orgNr"
          placeholder="Organisation Number"
          ref={register({ required: true })}
        />
        {errors.orgNr && <InputError>This field is required</InputError>}
        <Input
          name="vatNr"
          placeholder="Vat Number"
          ref={register({
            required: true,
            pattern: { value: /[Ss]{1}[Ee]{1}[0-9]{10}/ },
            message: "Vat number must start with SE followed by 10 digits",
          })}
        />
        {errors.vatNr && (
          <InputError>
            Vat number must start with SE followed by 10 digits
          </InputError>
        )}
        <Input
          name="reference"
          placeholder="Reference"
          ref={register({ required: true })}
        />
        {errors.reference && <InputError>This field is required</InputError>}
        <Input
          name="payTerm"
          placeholder="Payment Term"
          ref={register({ required: true, pattern: { value: /[0-9]/ } })}
        />
        {errors.payTerm && (
          <InputError>This field is required and must be a number</InputError>
        )}
        <Input
          name="website"
          placeholder="Website"
          ref={register({ required: true })}
        />
        {errors.website && <InputError>This field is required</InputError>}
        <Input
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && <InputError>This field is required</InputError>}
        <Input
          name="phone"
          placeholder="Phone Number"
          ref={register({ required: true })}
        />
        {errors.phone && <InputError>This field is required</InputError>}
        <InputButton type="submit" value="Add Customer" />
      </Form>
    </Container>
  );

  /* (
    <div>
      <h2>Add New Customer</h2>
      {inputObjects.map((inputItem, index) => {
        return renderInput(inputItem[0], inputItem[1], inputItem[2], index);
      })}
      <button onClick={handleAddCustomer}>Register</button>
    </div>
  ); */
}
