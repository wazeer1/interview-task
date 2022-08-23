import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../context/Store'

const Developer = () => {
    const {state:{userData:{name}}}=useContext(Context)
  return (
    <Cover>
        <div><h3>Hello {name} you are Developer</h3></div>
    </Cover>
  )
}

export default Developer
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