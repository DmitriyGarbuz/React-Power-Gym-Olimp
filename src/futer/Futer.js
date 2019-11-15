import React, {Component} from 'react';
import Facebook from '../img/fb.png';
import Insta from '../img/insta.png';
import Futers from './Futer.view';

class Futer extends Component {
    render () {
        return (
        <Futers.Wraper>
        <Futers.ConteinerIn>
         <Futers.Arhor href="https://www.google.com/maps/place/бульвар+Ромена+Роллана,+7,+Київ,+02000/">Адрес: Киев бул. Ромена Ролана 7</Futers.Arhor>
         <Futers.Arhor>Тел. +38 (050) 310-04-58</Futers.Arhor>
         </Futers.ConteinerIn>
         <Futers.ConteinerLogo>
         <Futers.Arhor href="https://www.facebook.com/PowerGymOLIMP/"><Futers.Logo src={Facebook} alt="Facebook"></Futers.Logo></Futers.Arhor>
         <Futers.Arhor href="https://www.instagram.com/power_gym_olimp/"><Futers.Logo src={Insta} alt="Instagram"></Futers.Logo></Futers.Arhor>
         </Futers.ConteinerLogo>
         <Futers.ConteinerIn>
<Futers.Text>График работы<br/>
Пн-Пт : с 9-00 по 22-00<br/>
Сб-Вс : с 10-00 по 18-00</Futers.Text>
         </Futers.ConteinerIn>
        </Futers.Wraper>
        
        )
    }
}

export default Futer;