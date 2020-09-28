import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";
import { useHistory, useParams } from "react-router-dom";
import {
  Header,
  Input,
  InputButton,
  Form,
  InputError,
} from "../style/styledComponents";

export default function CustomerDetailEdit({ setEditMode }) {
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

  useEffect(() => {
    if (selectedCustomer) {
      reset({
        name: selectedCustomer.name,
        orgNr: selectedCustomer.organisationNr,
        vatNr: selectedCustomer.vatNr,
        reference: selectedCustomer.reference,
        payTerm: selectedCustomer.paymentTerm,
        website: selectedCustomer.website,
        email: selectedCustomer.email,
        phone: selectedCustomer.phoneNumber,
      });
    }
  }, [selectedCustomer]);

  const history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    userKit
      .editCustomer(
        selectedCustomer.id,
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
          setEditMode(false);
          history.push("/home");
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header>Edit Customer</Header>
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
      {errors.payTerm && <InputError>This field is required</InputError>}
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
      <InputButton type="submit" value="Save" />
    </Form>
  );
}
