import styled from "styled-components";
import Background from "../img/homebackground.jpg";
import BackMob from '../img/BackMob.jpg'

export default {
    HomeBack: styled.div`
    width: 100%;
    height: 100%;
    background-image: URL(${BackMob});
    background-repeat: no-repeat;
    Justify-content: center;
    align-items: center;
    margin-top: -4%;
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: 90vh;
      margin-top: 0%;
      display: flex;
      background-size: cover;
      flex-direction: column;
      background-image: URL(${Background});
      ​​​​​​​background-repeat: no-repeat;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
    }
    `,
    Conteiner: styled.div`
    background-color: #DBDFF0;
    background-position:  center center;
    margin-left: 10%;
    width: 80%;
    height: 80%;
    opacity: 0.5;
    border-radius: 5px;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      margin-left: 0%;
      width: 60%;
      height: 60vh;
      background-color: #DBDFF0;
      background-position: center center;
      opacity: 0.8;
      filter: alpha(opacity=60);
      border-radius: 5px;
    }
    `,
    Row: styled.div`
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: row;
    }
    `
    ,
    ConteinerIn: styled.div`
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
    }
    `
    ,
 H1: styled.h1`
 font-size: 24px; 
 color: #23344A; 
 font-family: 'Helvetica Neue', sans-serif;
 line-height: 50px; 
 letter-spacing: 1px; 
 padding: 0 0 0px; 
 text-align: center;
 @media screen and (min-width: 600px) {
 color: #23344A; 
 font-family: 'Helvetica Neue', sans-serif; 
 font-size: 46px; 
 line-height: 50px; 
 letter-spacing: 1px; 
 padding: 0 0 0px; 
 }
`,
H2: styled.h2`
color: #23344A; 
font-family: 'Helvetica Neue', sans-serif; 
font-size: 20px; 
font-weight: 100; 
line-height: 50px; 
letter-spacing: 1px; 
padding: 0 0 2px;
`,
TextAfterH1: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 20px;
font-weight: 500;  
letter-spacing: -1px; 
color: black;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: -15px;
@media screen and (min-width: 600px) {
font-family: 'Orienta', sans-serif;
font-size: 30px;
font-weight: 500;  
letter-spacing: -1px; 
color: black;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: -15px;
}`,
Hr: styled.hr`
margin-top: -3vh;
width: 100px;
height: 12px;
border: 0;
box-shadow: inset 0 12px 12px -12px #23344A;
border-radius: 5px;
@media screen and (min-width: 600px) {
margin-top: -3vh;
width: 600px;
height: 12px;
border: 0;
box-shadow: inset 0 12px 12px -12px #23344A;
border-radius: 5px;}`,
Text: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 30px;
font-weight: 500;  
letter-spacing: -1px; 
color: black;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: 5vh;
`,
Futer: styled.div`
height: 10vh;
    @media screen and (min-width: 600px) {
}`,
}