import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../context/Store'

const ManagersLanding = () => {
    const {state:{userData:{name}}}=useContext(Context)
  return (
    <Cover>
        <div><h3>Hello {name} you are manager</h3></div>
    </Cover>
  )
}

export default ManagersLanding
const Cover = styled.div`
    height:100vh;
    background:#141414;
    display:flex;
    align-items:center;
    justify-content:center;
    div{
        color:#fff;
    }
`;