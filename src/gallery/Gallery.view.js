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
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
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
    display: flex;
    margin-left: 3%;
    width: 90%;
    height: 40%;
    background-color: #DBDFF0;
    background-position: center center;
    filter: alpha(opacity=60);
    border-radius: 5px;
    border: 7px solid #2F5B81;
    background-color: #DBDFF0;
    background-position:  center center;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: row;
      margin-left: 0%;
      width: 60%;
      height: 60rem;
      background-color: #DBDFF0;
      background-position: center center;
      filter: alpha(opacity=60);
      border-radius: 5px;
      border: 2px solid #2F5B81;
    }
    `,
    ConteinerIn: styled.div`
    @media screen and (min-width: 600px) {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }`,
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
  Futer: styled.div`
height: 10vh;
    @media screen and (min-width: 600px) {
}`,
}