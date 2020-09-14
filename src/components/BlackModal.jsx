import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
position:fixed;
height:100%;
width:100%;
background-color: rgba(0,0,0,.5);
text-decoration:0;
left:0;
bottom:0;
top: 0;
z-index:100;
overflow:hidden;
`

const BlackModal = ({onClick}) => {
    return (
        <Modal onClick = {onClick}>            
        </Modal>
    )
}

export default BlackModal;
