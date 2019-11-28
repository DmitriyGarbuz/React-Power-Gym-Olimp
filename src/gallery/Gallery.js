import React, {Component} from 'react';
import './style-gallery.css';
import Gallerys from '../gallery/Gallery.view';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from './styles.scss';
import Tabletop from 'tabletop';

 



class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            gallerys: '',
            data: '',
            img: '', 
            id: '', 
            alt: '', 
            link: false
      }
      this.getPictures();
    }
    getPictures = () => {
        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/Persons/edit#gid=929547388',
            callback: googleData => {
              this.setState({gallerys: googleData.Gallery.elements, img: googleData.Gallery.elements.img, id: googleData.Gallery.elements.id, alt: googleData.Gallery.elements.alt });

            },
            simpleSheet: false
          })
        }

   getPicture = () => { if(this.state.link !== true){
this.setState({  
    link: true})
}else{
    this.setState({  
        link: false}) 
}
    }
    render () {
        return (<Gallerys.Back>
            <Gallerys.Headline>Галерея</Gallerys.Headline>
<Gallerys.Conteiner>
{this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="picture" src={this.state.gallerys[0].img} alt={this.state.gallerys[0].alt}></img>
  <img className="picture" src={this.state.gallerys[1].img} alt={this.state.gallerys[1].alt}></img>
  <img className="picture" src={this.state.gallerys[2].img} alt={this.state.gallerys[2].alt}></img>
  <img className="picture" src={this.state.gallerys[3].img} alt={this.state.gallerys[3].alt}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
{this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="picture" src={this.state.gallerys[4].img} alt={this.state.gallerys[4].alt}></img>
  <img className="picture" src={this.state.gallerys[5].img} alt={this.state.gallerys[5].alt}></img>
  <img className="picture" src={this.state.gallerys[6].img} alt={this.state.gallerys[6].alt}></img>
  <img className="picture" src={this.state.gallerys[7].img} alt={this.state.gallerys[7].alt}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
 {this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="picture" src={this.state.gallerys[8].img} alt={this.state.gallerys[8].alt}></img>
  <img className="picture" src={this.state.gallerys[9].img} alt={this.state.gallerys[9].alt}></img>
  <img className="picture" src={this.state.gallerys[10].img} alt={this.state.gallerys[10].alt}></img>
  <img className="picture" src={this.state.gallerys[11].img} alt={this.state.gallerys[11].alt}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
 {this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="picture" src={this.state.gallerys[12].img} alt={this.state.gallerys[12].alt}></img>
  <img className="picture" src={this.state.gallerys[13].img} alt={this.state.gallerys[13].alt}></img>
  <img className="picture" src={this.state.gallerys[14].img} alt={this.state.gallerys[14].alt}></img>
  <img className="picture" src={this.state.gallerys[15].img} alt={this.state.gallerys[15].alt}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
{this.state.link !== false ? <div className="globalPicture"><img src={this.state.img} alt='galleryglobal'></img></div> : ''}
</Gallerys.Conteiner>
{this.state.link !== false ? <div>Я Есть</div> : ''}
<Gallerys.Futer></Gallerys.Futer>
        </Gallerys.Back>
        )
    }
}
export default Gallery;