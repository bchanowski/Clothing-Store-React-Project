import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4654.jpg?w=2000"),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #333333;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name..." />
          <Input placeholder="Last Name..." />
          <Input placeholder="Username..." />
          <Input placeholder="Email..." />
          <Input placeholder="Password..." />
          <Input placeholder="Confirm password..." />
          <Agreement>
            BY CREATING AN ACCOUNT I AGREE TO{" "}
            <b>THE PRIVACY AND COOKIES POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
