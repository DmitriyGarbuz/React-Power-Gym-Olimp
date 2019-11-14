import React, {Component} from 'react';
import Homes from '../home/Home.view'
import Tabletop from 'tabletop';



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
              this.setState({headline: googleData['0'].headline});
            },
            simpleSheet: true
          })
        }
    render () {
        return (<Homes.HomeBack>
<Homes.Conteiner>
            <Homes.H1>Спортивный клуб OLIMP</Homes.H1>
            <Homes.TextAfterH1>Лучшее место для работы над своим телом</Homes.TextAfterH1>
            <Homes.Hr></Homes.Hr>
    <Homes.Row>    
    <Homes.ConteinerIn>
        <h3>Ждем от Даши помощи</h3>
        <p>Мы создали современный тренyeажерный зал, в котором есть все необходимое для эффектных и комфортных тренировок с новейшим оборудованием.</p>
        <h3>Нужно придумать нужную Инфу</h3>
        <p>Мы создали современный тренyeажерный зал, в котором есть все необходимое для эффектных и комфортных тренировок с новейшим оборудованием.</p>
    </Homes.ConteinerIn>
    <Homes.ConteinerIn>
    <h3>Что нибудь этокое</h3>
        <p>Информаця Информаця Информаця Информаця Информаця Информаця Информаця Информаця Информаця Информаця </p>
    <img scr="рисунок" alt="рисунок"></img>
    <h3>Не могу же всё я придумывать</h3>
        <p>Информаця Информаця Информаця Информаця Информаця Информаця Информаця Информаця Информаця Информаця </p>
    <img scr="рисунок" alt="рисунок"></img>
    </Homes.ConteinerIn> 
    </Homes.Row>
    <Homes.Text>{this.state.headline}</Homes.Text>
</Homes.Conteiner>
<Homes.Futer></Homes.Futer>
        </Homes.HomeBack>
        )
    }
}
export default Home;