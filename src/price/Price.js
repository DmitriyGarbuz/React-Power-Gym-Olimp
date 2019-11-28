import React, {Component} from 'react';
import Prices from './Price.view';
import Tabletop from 'tabletop';
import '../helpers/loader.css';

class Abon extends Component {
        state = {
            data: this.props.data|| '',
            abonement: this.props.abonement|| '',
            cost: this.props.cost|| '', 
            id: this.props.id|| '',       
        }
        
        render () {
            return (<div>
                <Prices.Text>{this.state.abonement} - {this.state.cost}</Prices.Text>
            </div>
            )
        }
    
}

class Price extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos:'',
            abonement:'',
            cost:'',
            id:'',
            error:null,
            
        }
       this.getPrice() ;
    }


  
    getPrice = () => {
        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/Sheet1/edit#gid=0',
            callback: googleData => {
              this.setState({infos: googleData.Abons.elements});
            },
            simpleSheet: false
          })
    }
    
    render () {
        return (<Prices.Back>
            <Prices.Headline>Абонементы</Prices.Headline>
            <Prices.Conteiner>
            <Prices.Futer></Prices.Futer>
<div>
    <div>
    {this.state.infos ?
         this.state.infos.map(info =>
          <Abon {...info} key={info.id}/>
        ) : <div className="loader">
        <div className="loader_inner"></div>
      </div>
      }
    </div>
</div>
<Prices.Futer></Prices.Futer>
</Prices.Conteiner>
<Prices.Futer></Prices.Futer>
        </Prices.Back>
        )
    }
}
export default Price;