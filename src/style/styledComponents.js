import styled from "styled-components";

const background = "#cafafe";
const mainAccent = "#55bcc9";
const subAccent = "#55bcc9";
const danger = "#fc4445";

export const Button = styled.button`
  background: ${mainAccent};
  color: white;
  font-size: 25px;
  padding: 0px 30px;
  border: 2px solid ${mainAccent};
  border-radius: 6px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavButton = styled(Button)`
  margin-left: 20px;
`;

export const FormButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  background-color: ${(props) =>
    props.warning ? `${danger}` : `${mainAccent}`};
  border-color: ${(props) => (props.warning ? `${danger}` : `${mainAccent}`)};
`;

export const InputButton = styled.input`
  background: ${mainAccent};
  color: white;
  font-size: 25px;
  padding: 0px 30px;
  border: 2px solid ${mainAccent};
  border-radius: 6px;
  height: 50px;
  margin-top: 20px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background: ${background};
  height: 80px;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
  height: 50px;
  margin-right: 20px;
  color: ${subAccent};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowSpaced = styled(Row)`
  justify-content: space-between;
`;

export const Header = styled.h2`
  margin-bottom: 10px;
  color: ${mainAccent};
`;

export const SubHeader = styled.p`
  margin-bottom: 10px;
  color: ${subAccent};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${background};
  padding: 50px;
  width: auto;
  border-radius: 10px;
`;

export const CustomerDetailContainer = styled(Container)`
  width: 500px;
`;

export const CustomerListContainer = styled(Container)`
  background-color: white;
`;

export const CustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${background};
  border: 1px solid ${background};
  color: ${subAccent};
  padding: 20px;
  margin: 5px;
  border-radius: 5px;
  width: 500px;
  &:hover {
    border-color: #32adad;
    transition: 0.1s;
  }
`;

export const CustomerInfoContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border-bottom: 1px solid black;
`;

export const CustomerInfo = styled.p`
  padding: 5px;
`;

export const HomeContainer = styled(Container)`
  flex-direction: row;
  background-color: white;
  justify-content: space-around;
  width: 100%;
  padding: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  appearance: none;
  outline: none;
  -webkit-appearance: none;
  width: 500px;
  padding: 16px 12px 0 12px;
  border: none;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: ${background};
  border-bottom: 1px solid ${subAccent};
  color: ${subAccent};
  outline-width: 0;
  &:focus {
    border-bottom: 1px solid white;
  }
`;

export const InputError = styled.p`
  color: ${danger};
  align-self: flex-start;
`;
