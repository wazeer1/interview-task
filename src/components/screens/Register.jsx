import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/Store";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [userArray, setUserArray] = useState({});
  const [error,setError]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const {
    state: { users },
    state,
    dispatch,
  } = useContext(Context);
  //   console.log(userArray);
  useEffect(() => {
    setUserArray(users);
  }, []);
  const navigate = useNavigate();
  console.log(users, users);
  const handleRegister = () => {
    if (name.length >2 & email.length > 4 & username.length > 3 & dob.length > 3 & password.length > 3 & role.length > 3) {
        dispatch({
            type: "UPDATE_USER_ARRAY",
            payload: {
              name: name,
              email: email,
              username: username,
              dob: dob,
              password: password,
              role: role,
            },
          });
          navigate("/");
    }else{
        setError(true)
        setErrorMessage('all data must be filled')
    }
    
  };
  console.log(state);
  return (
    <Cover>
      <Left>
        <Container>
          <Heading>Register</Heading>
          <FormCover>
            <InputDiv>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <Label>Name</Label>
            </InputDiv>
            <InputDiv>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>Email</Label>
            </InputDiv>
            <InputDiv>
              <input
                type="date"
                placeholder="Enter your date"
                onChange={(e) => setDob(e.target.value)}
              />
              <Label>date of birth</Label>
            </InputDiv>
            <InputDiv>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Label>Username</Label>
            </InputDiv>
            <InputDiv>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label>Password</Label>
            </InputDiv>
            <InputDiv>
              <select onChange={(e) => setRole(e.target.value)}>
                <option value="" selected disabled>
                  select role
                </option>
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
              </select>
              <Label>Role</Label>
            </InputDiv>
            <h5>{errorMessage}</h5>
            <ButtonSubmit onClick={() => handleRegister()}>Login</ButtonSubmit>
            <p>
              already have account ? <Link to="/">Login</Link>
            </p>
          </FormCover>
        </Container>
      </Left>
    </Cover>
  );
};

export default Register;
const Cover = styled.div`
  height: 100vh;
  background: #2742eb;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 90%;
  height: 50%;
  // background:red;
`;
const Heading = styled.h4`
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  color: #000;
`;
const FormCover = styled.div`
  text-align: center;
  p {
    margin-top: 20px;
  }
  h5{
    color:red;
  }
`;
const InputDiv = styled.div`
  width: 60%;
  height: 35px;
  margin: 0 auto;
  border: 1.2px solid #000;
  // overflow:hidden;
  margin-top: 20px;
  border-radius: 6px;
  position: relative;
  select {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
  }

  // background:red;
  input {
    width: 100%;
    height: 100%;
    // padding-left:7px;
  }
`;
const Label = styled.span`
  color: #000;
  background: #fff;
  position: absolute;
  padding: 0px 4px;
  left: 3%;
  top: -35%;
`;
const ButtonSubmit = styled.div`
  width: 50%;
  background: blue;
  height: 45px;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
