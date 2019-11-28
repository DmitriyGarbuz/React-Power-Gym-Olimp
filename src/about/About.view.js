import styled from "styled-components";
import Background from "../img/homebackground.jpg";
import Backmob from '../img/BackMob.jpg';

export default {
    Back: styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: URL(${Backmob});
    background-repeat: no-repeat;
    background-position: top;
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
      background-image: URL(${Background});
      ​​​​​​​background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 140vh;
      display: flex;
      flex-direction: column;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
    }
    `,
    Conteiner: styled.div`
    background-position:  center center;
    @media screen and (min-width: 600px) {
      background-color: rgba(247,245,245,0.8);
      border-radius: 5px;
      display: flex;
      margin-left: 0%;
      width: 60%;
      height: 100%;
      margin-bottom: 5vh;
      background-position: center center;
      filter: alpha(opacity=60);
    }
    `,
    ConteinerIn: styled.div`
    @media screen and (min-width: 600px) {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
    `,
    ConteinerPerson: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 600px) {
    margin-top: 2%;
    }
    `,
    Headline: styled.p`
    color: white; 
    font-family: 'Raleway',sans-serif; 
    font-size: 26px; 
    font-weight: 800; 
    line-height: 72px; 
    margin: 0 0 24px; 
    text-align: center; 
    text-transform: uppercase;
    @media screen and (min-width: 600px) {
    font-size: 46px; 
    }`,
    Logo: styled.img`
    width: 200px;
    height: auto;
    border-radius: 10%;
    margin: 1vh;
    margin-top: 5vh;
    @media screen and (min-width: 600px) {
    width: 200px;
    height: auto;
    border-radius: 10%;
    margin: 1vh;
    }`,
Text: styled.p`
margin-block-start: -1vh;
margin-block-end: 0vh;
font-family: 'Orienta', sans-serif;
font-size: 30px;
font-weight: 500;  
letter-spacing: -1px; 
color: white;
text-shadow: 1px 1px 0 #000;
text-align: center; 
line-height: 50px;
@media screen and (min-width: 600px) {
color: #23344A;
}`,
TextAt: styled.p`
margin-block-start: 0em;
margin-block-end: 0vh;
color: white; 
font-weight: 700;
width: 200px;
font-family: 'Source Sans Pro', sans-serif; 
font-size: 14px; 
text-align: center; 
 
@media screen and (min-width: 600px) {
color: #23344A; 
font-size: 16px;
margin-left: 1%;
margin-right: 1%;
}`,
Futer: styled.div`
height: 10vh;
    @media screen and (min-width: 600px) {
}`,
}