import React, {Component} from 'react';
import Prices from './Price.view';
// import axios from 'axios';
import Tabletop from 'tabletop';
//import Spreadsheet from 'react-spreadsheet';
//import config from "../config";
//import ReactGoogleSheets from 'react-google-sheets';

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
        // axios.get('https://sheets.googleapis.com/v4/spreadsheets/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/values:batchGet?ranges=A1:A5&majorDimension=ROWS&key=AIzaSyDXKG0LFWyMXNERW42kI69F0yfDI_tVej8')
        // .then(({data}) => {
        //     this.setState({abonement: data})
        //     console.log(this.state.abonement, "abonement");
        //     console.log (typeof(this.state.abonement));
        // })
        // axios.get('https://sheets.googleapis.com/v4/spreadsheets/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/values:batchGet?ranges=B1:B5&majorDimension=ROWS&key=AIzaSyDXKG0LFWyMXNERW42kI69F0yfDI_tVej8')
        // .then(({data}) => {
        //     this.setState({cost: data.valueRanges["0"].values})
        //     console.log(this.state.cost, "cost");
        // })
        // axios.get('https://sheets.googleapis.com/v4/spreadsheets/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/values:batchGet?ranges=C1:C5&majorDimension=ROWS&key=AIzaSyDXKG0LFWyMXNERW42kI69F0yfDI_tVej8')
        // .then(({data}) => {
        //     this.setState({id: data.valueRanges["0"].values})
        //     console.log(this.state.id, "id");
        // })
    }
    
    render () {
        return (<Prices.Back>
            <Prices.Headline>Абонементы</Prices.Headline>
<div>
    <div>
    {this.state.infos ?
         this.state.infos.map(info =>
          <Abon {...info} key={info.id}/>
        ) : <p>Загрузка</p>
      }
    </div>
</div>
<Prices.Futer></Prices.Futer>
        </Prices.Back>
        )
    }
}
export default Price;