import styled from "styled-components";
import Cats from '../img/cats.png'

export default {
TopDiv: styled.div`
display: none;
@media screen and (min-width: 600px) {
  display: block;
background-image: URL(${Cats});
width: 100%;
height: 4vh;
background-position: center;
background-size: contain;
}
   @media screen and (min-width: 1035px) {
display: block;
background-image: URL(${Cats});
width: 100%;
height: 5vh;
background-position: center;
background-size: contain;
}
`,
  DivLogo: styled.div`
  display: none;
  @media screen and (min-width: 600px) {
  display: block;
  width: 100px;
  Justify-content: center;
  align-items: center;
   margin: 5px;
  }
  `,
  MobTop: styled.div`
  display: flex;
  justify-content: center;
  background-color: #23344A;
  width: 100%;
  height: 12vh;
  background-position: center;
  background-size: contain;
  @media screen and (min-width: 600px) {
    display: none;
  }`,
  MobLogoGlobal: styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 45%;
  @media screen and (min-width: 600px) {
    display: none;
  }`,
  MobLogoRow: styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (min-width: 600px) {
    display: none;
  }`,
  MobRight: styled.div`
  width: 10%;
  @media screen and (min-width: 600px) {
  }`,
  MobLogo: styled.div`
  width: 100%;
  border-radius: 10%;
  border: 4px solid #2F5B81;
  margin: 1vh;
  width: 50px;
  height: 50px;
  @media screen and (min-width: 600px) {
  }`,
  Logo: styled.img`
  border-radius: 5%;
  width: 100%;
  position: releitive;
  @media screen and (min-width: 600px) {
    display: block;
    position: absolute;
    top:0vh;
    left: 0%;
    width: 100px;
    height: 100px;
    border-radius: 10%;
    border: 7px solid #2F5B81;
    margin: 1vh;
  }
  @media screen and (min-width: 1035px) {
  display: block;
  position: absolute;
  top: -1vh;
  left: 5%;
  width: 150px;
  height: 150px;
  border-radius: 10%;
  border: 7px solid #2F5B81;
  margin: 1vh;
  }
  `,
  Wraper: styled.div`
  display: flex;
    width: 100%;
    height: 20%;
    justify-content: flex-start;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      Justify-content: center;
      align-items: center;
    }
    `,
    Conteiner: styled.div`
display: none;
    @media screen and (min-width: 600px) {
      background: linear-gradient(to top, #2F5B81, #23344A);
      display: flex;
      Justify-content: center;
      width: 100%;
      height: 20%;
    }
    `,
    ConteinerMob: styled.div`
    background: linear-gradient(to top, #2F5B81, #23344A);
    display: flex;
    Justify-content: center;
    width: 100%;
    height: 20%;
    @media screen and (min-width: 600px) {
    display: none;
    } `,
  NavUl: styled.ul`
  margin-left: 70%;
        list-style: none;
        background: linear-gradient(to top, #2F5B81, #23344A);
        text-align: center;
        padding: 0;
        margin: 0;
        @media screen and (min-width: 600px) {
          display: flex;
          width: 400px;
          overflow: auto;
          width: 600px;
          Justify-content: center;
           align-items: center;
        }
          @media screen and (min-width: 1035px) {
          overflow: auto;
          width: 600px;
          Justify-content: center;
      align-items: center;
        }
      `,
  NavLi: styled.li`
        font-family: 'Oswald', sans-serif;
        font-size: 1.2em;
        line-height: 40px;
        height: 40px;
        border-bottom: 1px solid #888;
        @media screen and (min-width: 600px) {
          width: 80px;
          border-bottom: none;
          height: 50px;
          line-height: 50px;
          font-size: 1em;
          display: inline-block;
          margin-right: -4px;
          float: left;
        }
          @media screen and (min-width: 1035px) {
          width: 120px;
          border-bottom: none;
          height: 50px;
          line-height: 50px;
          font-size: 1.4em;
          display: inline-block;
          margin-right: -4px;
          float: left;
        }
        a {
          text-decoration: none;
          color: #fff;
          display: block;
          transition: .3s background-color;
         
        :hover {
          background-color: #fff;
          color: #2F5B81;
        }
        }
      ` ,
      Tel: styled.img`
      display: block;
      position: fixed;
      top:0vh;
      rigft: 0%;
      width: 45px;
      height: 45px;
      border-radius: 10%;
      margin: 1vh;
  @media screen and (min-width: 600px) {
    display: none;
  }`
}
