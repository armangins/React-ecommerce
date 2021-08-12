import styled, {css} from "styled-components";


const getButtonStyle = props=>{

    if(props.googleSignIn){
        return googleBtn
    }

    return props.inverted ? invertedStyle: ' ';
}


export const CustomButtonContainer = styled.button`

min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
       background-color: white;
        color: black;
    border: 1px solid black;
  }

${getButtonStyle}

`

const googleBtn = css`

    margin-left: .8rem;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: rgb(33,102,192);
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: rgb(33, 102, 192);
      border: 1px solid rgb(33, 102, 192)
    }
`

const invertedStyle = css`
 {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
   
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border: none 
    }

  }`









