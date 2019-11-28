import React, {Component} from 'react';
import '../helpers/loader.css';
import Abouts from '../about/About.view';
import Tabletop from 'tabletop';

class PersonLeft extends Component {
    state = {
        data: this.props.data|| '',
        nameL: this.props.nameL|| '',
        imgL: this.props.imgL|| '', 
        id: this.props.id|| '',
        type: this.props.type|| '',
        nameR: this.props.nameR|| '',
        imgR: this.props.imgR|| '', 
        textL: this.props.textL|| '',
        textR: this.props.textR|| '',
    }
    
    render () {

        return (<div type={this.state.type}> 
            <Abouts.Logo src={this.state.imgL} alt="PersonPhoto"></Abouts.Logo>
            <Abouts.Text>{this.state.nameL}</Abouts.Text>
            <Abouts.TextAt>{this.state.textL}</Abouts.TextAt>
        </div>
        )
    }
  
}

class PersonRight extends Component {
    state = {
        data: this.props.data|| '',
        nameL: this.props.nameL|| '',
        imgL: this.props.imgL|| '', 
        id: this.props.id|| '',
        type: this.props.type|| '',
        nameR: this.props.nameR|| '',
        imgR: this.props.imgR|| '', 
        textL: this.props.textL|| '',
        textR: this.props.textR|| '',
        
    }
    
    render () {

        return (<div type={this.state.type}> 
            <Abouts.Logo src={this.state.imgR} alt="PersonPhoto"></Abouts.Logo>
            <Abouts.Text>{this.state.nameR}</Abouts.Text>
            <Abouts.TextAt>{this.state.textR}</Abouts.TextAt>
        </div>
        )
    }
  
}

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            persons:'',
            name:'',
            img:'',
            id:'',
            type: '',
            
        }
       this.getPerson() ;
    }
    getPerson = () => {
        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/Persons/edit#gid=929547388',
            callback: googleData => {
              this.setState({persons: googleData.Persons.elements});
            },
            simpleSheet: false
          })
        }
    render () {
        return (<Abouts.Back>
            <Abouts.Headline>Наша Команда</Abouts.Headline>
<Abouts.Conteiner>
    <Abouts.ConteinerIn>
    <Abouts.ConteinerPerson>
    <div>
    {this.state.persons ?
         this.state.persons.map(person => 
          <PersonLeft {...person} key={person.id}/>
         ) : <div className="loader">
         <div className="loader_inner"></div>
       </div>
      }
    </div>
    </Abouts.ConteinerPerson>
    </Abouts.ConteinerIn>
    <Abouts.ConteinerIn>
    <Abouts.ConteinerPerson>
    <div>
    {this.state.persons ?
         this.state.persons.map(person => 
          <PersonRight {...person} key={person.id}/>
         ) : <div className="loader">
         <div className="loader_inner"></div>
       </div>
      }
    </div>
    </Abouts.ConteinerPerson>
    </Abouts.ConteinerIn>
</Abouts.Conteiner>
<Abouts.Futer/>
        </Abouts.Back>
        )
    }
}
export default About;