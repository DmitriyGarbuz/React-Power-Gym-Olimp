import styled from "styled-components";
import Back from "../img/Back.jpg";

export default {
    Back: styled.div`
    width: 100%;
    height: 100%;
    background-image: URL(${Back});
    background-repeat: no-repeat;
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: 90vh;
      display: flex;
      background-size: cover;
      flex-direction: column;
      background-image: URL(${Back});
      ​​​​​​​background-repeat: no-repeat;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
    }
    `,
    Text: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 12px;
font-weight: 500;  
letter-spacing: -1px; 
color: black;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: -15px;
@media screen and (min-width: 600px) {
  font-size: 30px; 
  }
`,
Headline: styled.p`
color: #23344A; 
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