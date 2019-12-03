import styled from "styled-components";
import Background from "../img/homebackground.jpg";
import Backmob from '../img/BackMob.jpg';

export default {
    HomeBack: styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: URL(${Backmob});
    background-repeat: no-repeat;
    Justify-content: center;
    align-items: center;
    margin-top: -4%;
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: 145vh;
      margin-top: 0%;
      display: flex;
      background-size: cover;
      flex-direction: column;
      background-image: URL(${Background});
      ​​​​​​​background-repeat: no-repeat;
      background-position: left;
      Justify-content: flex-start;
      align-items: center;
    }
    @media screen and (min-width: 800px) {
      height: 120vh;
    }
    @media screen and (min-width: 1000px) {
      height: 100vh;
    }
    @media screen and (min-width: 1350px) {
      height: 110vh;
    }
    @media screen and (min-width: 1500px) {
      height: 100vh;
    }
    `,
    Conteiner: styled.div`
    background-position:  center center;
    margin-left: 10%;
    width: 80%;
    height: 97%;
    background-color: rgba(247,245,245,0.8);
    border-radius: 5px;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      margin-left: 0%;
      width: 90%;
      height: 85%;
      background-color: rgba(247,245,245,0.8);
      background-position: center center;
      filter: alpha(opacity=60);
      border-radius: 5px;
    }
    @media screen and (min-width: 1000px) {
      width: 75%;
      height: 70%;
    }
    @media screen and (min-width: 1250px) {
      width: 70%;
      height: 80%;
    }
    @media screen and (min-width: 1650px) {
      width: 70%;
      height: 70%;
    }
    `,
    Row: styled.div`
    @media screen and (min-width: 600px) {
      display: block;
      flex-direction: row;
      position: relative;
      align-self: flex-start;
    }`,
    ConteinerIn: styled.div`
    @media screen and (min-width: 600px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    @media screen and (min-width: 800px) {
      width: 49%;
      display: flex;
      flex-direction: column;
    }
    `,
 H1: styled.h1`
 margin-top: 2%;
 font-size: 24px; 
 color: white; 
 font-family: 'Helvetica Neue', sans-serif;
 line-height: 50px; 
 letter-spacing: 1px; 
 padding: 0 0 0px; 
 text-align: center;
 @media screen and (min-width: 600px) {
   margin-top: 10%;
 color: white; 
 font-family: 'Helvetica Neue', sans-serif; 
 font-size: 46px; 
 line-height: 50px; 
 letter-spacing: 1px; 
 padding: 0 0 0px; 
 }
 @media screen and (min-width: 800px) {
  margin-top: 1%;
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
font-size: 16px;
font-weight: 500;  
letter-spacing: -1px; 
color: white;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: -15px;
@media screen and (min-width: 600px) {
font-family: 'Orienta', sans-serif;
font-size: 30px;
font-weight: 500;  
letter-spacing: -1px; 
color: white;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: -15px;
}`,
Hr: styled.hr`
margin-top: -4vh;
width: 250px;
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
border-radius: 5px;}
@media screen and (min-width: 1000px) {
  margin-top: 0vh;
}`,
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
TextAtCats: styled.p`
color: #23344A; 
font-family: 'Source Sans Pro', sans-serif; 
font-size: 14px; 
line-height: 32px; 
margin: 0 0 24px;
margin-top:2%;
margin-left: 5px;
margin-right: 1%;
@media screen and (min-width: 600px) {
  position: relative;
  width: 95%;
font-size: 16px;
margin-left: 1%;
margin-right: 1%;
}`,
Futer: styled.div`
height: 10vh;
    @media screen and (min-width: 600px) {
      margin-top:1%;
      height: 1vh;
}`,
Backspace: styled.div`
height: 2vh;
    @media screen and (min-width: 600px) {
      height: 0vh;
}`,
Logo: styled.img`
width: 95%;
height: auto;
border-radius: 10%;
margin: 1vh;
@media screen and (min-width: 600px) {
  position: relative;
  width: 12rem;
height: 12rem;
float: left;
border-radius: 10%;
margin: 1vh;
}`,
}