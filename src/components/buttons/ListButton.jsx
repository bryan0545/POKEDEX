import React from 'react';
import styled from 'styled-components';

const ListButton = ({ onClick, active }) => {
    return (
        <IconList onClick={() => onClick("list")} active={active}>
            <div>
                <div className="short"></div>
                <div className="large"></div>

            </div>
            <div>
                <div className="short"></div>
                <div className="large"></div>

            </div>
            <div>
                <div className="short"></div>
                <div className="large"></div>

            </div>
        </IconList>
    );
}

export default ListButton;


const IconList = styled.div`
    width:2rem;
    height:2rem;
    top:12px;
    right:15px;
    display:flex;  
    justify-content: space-around;
    flex-flow: column nowrap;
    border: 1px solid #ef5350;
    padding: 1px 1px;
    transition: all .2s;
    background-color: white;
    background-color: white; 
    border-radius: 5px 0 0 5px;
    
    :active{
        background-color: #ef5350; 
        div{
            div{
                background-color: white; 
            }
        }
    }
    
    div{ 
        display:flex;
        flex-flow: row nowrap;
        .large{
            height:.25rem;
            width:1.5rem;
            background-color: #ef5350;
            border-radius: 10px; 
            margin-right: 2px;
        }
        .short{
            height:.25rem;
            width:.25rem;
            background-color: #ef5350;
            border-radius: 10px; 
            margin-right: 2px;
            margin-left: 1px;
        } 
    }     
  `



// &:nth-child(1){
//     background-color: white;
//     }
//     &:nth-child(2){
//         background-color: white;
//     }
//     &:nth-child(3){
//         background-color: white;
//     }





{/* <GroupButtons >
<input id="LL" type="radio" value="LL" name="market" />
<label for="LL" className="left">LL</label>
<input id="MM" type="radio" value="MM" name="market" />
<label for="MM" className="mid">MM</label>
<input id="RR" type="radio" value="RR" name="market" />
<label for="RR" className="right">MM</label>
</GroupButtons>



const GroupButtons = styled.div` 
 label{
    padding:10px;
    background-color: transparent;
    border: 1px solid #BB403E;
    outline: none;  
    cursor: pointer;
    color: #ef5350;
    background-color: transparent;
    transition: all 0.2s;
}
/* Hide the radio button */
    // input[name='market']{ 
    //     display:none;
}
/* The checked buttons label style */
// input[name='market']:checked+label{
//     background-color: #ef5350;
//     color:white;
// } 

// .left{
//     border-radius: 8px 0px 0px 8px ; 
// }
// .mid{
//     border-radius:0;  
// }
// .right{
//     border-radius: 0px 8px 8px 0px ;
// }
// `
//  */}
