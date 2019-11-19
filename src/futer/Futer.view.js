import styled from "styled-components";

export default {
Wraper: styled.div`
width: 100%;
height: 15vh;
background: linear-gradient(to top,#000000, #0C0B0B);
margin-bottom: 0vh;
display: flex;
justify-content: center;
@media screen and (min-width: 600px) {
height: 10vh;
}
`,
Row: styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`,
ConteinerIn: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,
ConteinerLogo: styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a{
    :hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
      } 
  }
`,
Arhor: styled.a`
text-align: center;
font-size: 10px;
text-decoration: none;
color: #fff;
:hover {
    font-weight: bolder;
  }
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }`,
  Text: styled.p`
  text-align: center;
  margin-left: 2vw;
font-size: 10px;
text-decoration: none;
color: #fff;
:hover {
    font-weight: bolder;
  }
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }`,
Logo: styled.img`
width: auto;
height: 60px;
margin: 1vh;
@media screen and (min-width: 600px) {
width: 50px;
height: 50px;
border-radius: 10%;
margin: 1vh;
}`,

}