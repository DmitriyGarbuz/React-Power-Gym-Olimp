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
    Conteiner: styled.div`
    background-position:  center center;
    display: flex;
    flex-direction: column;
    Justify-content: flex-start;
    margin-left: 3%;
    width: 90%;
    height: 100%;
    background-position: center center;
    filter: alpha(opacity=60);
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      Justify-content: flex-start;
      margin-left: 0%;
      width: 60%;
      height: 60vh;
      background-position: center center;
      filter: alpha(opacity=60);
    }
    `,
    ConteinerMap: styled.div`
    margin-left: 3%;
    width: 100%;
    height: 50vh;
    display: flex;
    Justify-content: center;
    @media screen and (min-width: 600px) {
    }
    `,
    Futer: styled.div`
    height: 10vh;
        @media screen and (min-width: 600px) {
    }`,
}