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
    align-items: center;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: 90vh;
      display: flex;
      background-size: cover;
      background-image: URL(${Background});
      ​​​​​​​background-repeat: no-repeat;
      flex-direction: column;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
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
    Conteiner: styled.div`
    background-position:  center center;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    background-color: rgba(247,245,245,0.8);
    margin-left: 5%;
    width: 90%;
    height: 100%;
    filter: alpha(opacity=60);
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      Justify-content: flex-start;
      margin-left: 0%;
      width: 80%;
      height: 90vh;
      background-position: center center;
      filter: alpha(opacity=60);
    }`,
    ConteinerMap: styled.div`
    margin-left: 0vw;
    position: relative; 
    width: 90vw;
    height: 50vh;
    display: flex;
    Justify-content: center;
    margin-bottom: 2vh;
    div {
      position: relative;
    }
    @media screen and (min-width: 600px) {
      width: 90vw;
      margin-left: -5vw;
    }`,
    ConteinerIn: styled.div`
    display: flex;
    Justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 600px) {
      width: 49%;
      display: flex;
      flex-direction: column;
    }`,
    Row: styled.div`
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: row;
    }`,
    TextAfterH1: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 22px;
font-weight: 600;  
letter-spacing: -1px; 
color: #23344A;
text-align: center; 
line-height: 50px;
margin-top: 1px;
@media screen and (min-width: 600px) {
font-family: 'Orienta', sans-serif;
font-size: 30px;
font-weight: 600;  
letter-spacing: -1px; 
color: #23344A;
text-shadow: 1px 1px 0 #23344A, margin: 2px 0 4px; 
text-align: center; 
line-height: 50px;
margin-top: 1px;
}`,
Text: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 20px;
font-weight: 500;  
letter-spacing: -1px; 
color: #23344A;
text-shadow: 1px 1px 0 #000, margin: 0px 0 0px; 
text-align: center; 
margin-top: 0vh;
`,
Arhor: styled.a`
font-family: 'Orienta', sans-serif;
font-size: 20px;
font-weight: 500;  
color: #23344A;
align-items: center;
text-align: center; 
margin-top: -2vh;
text-decoration: none;
color: #23344A;
:hover {
    font-weight: bolder;
  }
  @media screen and (min-width: 600px) {
    font-family: 'Orienta', sans-serif;
    font-size: 20px;
    font-weight: 500;  
    letter-spacing: -1px; 
    color: #23344A;
    text-shadow: 1px 1px 0 #000, margin: 0px 0 0px; 
    text-align: center; 
    margin-top: -1vh;
  }`,
    Futer: styled.div`
    height: 10vh;
        @media screen and (min-width: 600px) {
          margin-top: 5vh;
          height: 10vh;
    }`,
}