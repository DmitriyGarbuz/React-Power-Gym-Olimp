import styled from "styled-components";

export default {
    Back: styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: 90vh;
      display: flex;
      flex-direction: column;
      ​​​​​​​background-repeat: no-repeat;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
    }
    `,
    Conteiner: styled.div`
    background-position:  center center;
    @media screen and (min-width: 600px) {
      display: flex;
      margin-left: 0%;
      width: 60%;
      height: 60vh;
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
    justify-content: center;
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
    Logo: styled.img`
    width: 200px;
    height: auto;
    border-radius: 10%;
    margin: 1vh;
`,
Text: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 30px;
font-weight: 500;  
letter-spacing: -1px; 
color: black;
text-shadow: 1px 1px 0 #000, margin: 2px 0 24px; 
text-align: center; 
line-height: 50px;
margin-top: -15px;
`,
}