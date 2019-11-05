import React, {Component} from 'react';
import Gallerys from '../gallery/Gallery.view';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';

class Gallery extends Component {
    render () {
        return (<Gallerys.Back>
            <Gallerys.Headline>Галерея</Gallerys.Headline>
<Gallerys.Conteiner>
<AwesomeSlider cssModule={AwsSliderStyles}>
    <div data-src="https://www.ambal.ru/72457275615.jpg" />
    <div data-src="https://p0.zoon.ru/preview/IKPDS-kbN1klTqP8MU5KYA/640x440x85/0/f/b/original_5391236a40c088261e8b45aa_53912421f00e8.jpg" />
    <div data-src="https://www.ambal.ru/22331466515.jpg" />
    <div data-src="https://www.7sport.com.ua/sites/default/files/1/45/69.jpg" />
  </AwesomeSlider>
</Gallerys.Conteiner>
<Gallerys.Futer></Gallerys.Futer>
        </Gallerys.Back>
        )
    }
}
export default Gallery;