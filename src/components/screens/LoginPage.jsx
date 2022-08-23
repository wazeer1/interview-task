import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/Store";

const LoginPage = () => {
    const [log,setLog]=useState(true)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const [errorMessage,setErrorMessage]=useState('')
    const {state:{users},state,dispatch}=useContext(Context)
    const handleLogin=()=>{
        if (username.length > 2 & password.length  > 2) {
            console.log('hello i am wazeer');
            users.filter(item=>item.username == username).map(user=>{
                if (user) {
                    if (user.password == password) {
                        dispatch({
                            type: "UPDATE_USER_DATA",
                            payload: {
                                isVerified:true,
                                role:user.role,
                                name:user.name,
                            },
                          });
    
                    }else{
                        setError(true)
                        setErrorMessage('password is incorrect')
                    }
                }else{
                    setError(true)
                    setErrorMessage('no user found with this username')
                }
            })
        }
        
    }
    
  return (
    <Cover>
      <Left>
        <Container>
          <Heading>LogIn</Heading>
          <FormCover>
            <InputDiv>
              <input type="text" placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)}/>
              <Label>Username</Label>
            </InputDiv>
            <InputDiv>
              <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
              <Label>Password</Label>
            </InputDiv>
            <ButtonSubmit onClick={()=>handleLogin()}>
                Login
            </ButtonSubmit>
            {error && <span>{errorMessage}</span>}
            <p>register <Link to="/auth/register">register</Link></p>
          </FormCover>
        </Container>
      </Left>
    </Cover>
  );
};

export default LoginPage;
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
text-align:center;
p{
    margin-top:20px;
}
`;
const InputDiv = styled.div`
  width: 60%;
  height: 35px;
  margin: 0 auto;
  border: 1.2px solid #000;
  // overflow:hidden;
  margin-top: 50px;
  border-radius: 6px;
  position: relative;
  // background:red;
  input {
    width: 100%;
    height: 100%;
    // padding-left:7px;
  }
`;
const Label = styled.span`
  color:#000;
  background:#fff;
  position:absolute;
  left:3%;
  top:-35%;
`;
const ButtonSubmit = styled.div`
  width:50%;
  background:blue;
  height:45px;
  color:#fff;
  font-weight:700;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 auto;
  margin-top:20px;
  border-radius:10px;
  cursor:pointer;
`;
