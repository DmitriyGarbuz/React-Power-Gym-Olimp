import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Homes from '../home/Home.view'
import Tabletop from 'tabletop';
import "./home.css";
import cat1 from '../img/cat1.jpg';
import cat2 from '../img/cat2.jpg';
import cat3 from '../img/cat3.jpg';
import cat4 from '../img/cat4.jpg';



class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            headline: '',
            error:null,
            
        }
       this.getPrice() ;
    }


  
    getPrice = () => {
        Tabletop.init({
            key: '140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw',
            callback: googleData => {
              this.setState({headline: googleData.Abons.elements[0].headline});
            },
            simpleSheet: false
          })
        }
    render () {
        return (<Homes.HomeBack>
                        <Homes.H1>Спортивный клуб OLIMP</Homes.H1>
            <Homes.TextAfterH1>Лучшее место для работы над своим телом</Homes.TextAfterH1>
            <Homes.Hr></Homes.Hr>
<Homes.Conteiner>
<div className="row"> 
    <Homes.ConteinerIn>
    <Homes.Row>
        <Homes.Logo src={cat3} alt="cats"></Homes.Logo>
        <Homes.TextAtCats> Мы создали современный тренажерный зал, в котором есть все необходимое для эффектных и комфортных тренировок с новейшим оборудованием.</Homes.TextAtCats>
        </Homes.Row>
        <Homes.Row>
        <Homes.Logo src={cat2} alt="cats"></Homes.Logo>
        <Homes.TextAtCats> Любая тренировка — это двигательная активность, которой критически не хватает современным людям. В течение дня мы сидим, иногда стоим, изредка ходим, и снова сидим. Но наше тело создано для другого! Оно должно бегать, прыгать и преодолевать препятствия. </Homes.TextAtCats>
        </Homes.Row>
    </Homes.ConteinerIn>
    <Homes.ConteinerIn>
        <Homes.Row>
        <Homes.Logo src={cat1} alt="cats"></Homes.Logo>
        <Homes.TextAtCats><NavLink to="/about"><b>Наша команда</b></NavLink> знает как подобрать индивидуальную програму именно для вас. Мы уважаем личное пространство каждого атлета и вокруг каждого тренажёра предусмотрено свободное место. У нас вы не почуствуете, что на вас все смотрят, они просто в данный момент пашут :)</Homes.TextAtCats>
        </Homes.Row>
        <Homes.Row>
        <Homes.Logo src={cat4} alt="cats"></Homes.Logo>
        <Homes.TextAtCats> График работы Спортивного клуба Олимп максимально удобный для вас. Мы работаем без выходных с понедельника по пятницу с 7-00 до 22-00 , выходные с 10-00 до 18-00. <b>{this.state.headline}</b></Homes.TextAtCats>
        </Homes.Row>
    </Homes.ConteinerIn> 
    </div>
    <div class="button-container-1">
      <NavLink to="/price">
      <span class="mas"><b>ХОЧУ УЗНАТЬ ЦЕНУ!</b></span>
    <button id='work' type="button" name="Hover"><b>ХОЧУ УЗНАТЬ ЦЕНУ!</b></button>
    </NavLink>
  </div>
  <Homes.Backspace/>
</Homes.Conteiner>
<Homes.Futer/>
        </Homes.HomeBack>
        )
    }
}
export default Home;