import React, {Component} from 'react';
import Abouts from '../about/About.view';
import PersonPhoto from '../img/Person1.png';

class About extends Component {
    render () {
        return (<Abouts.Back>
            <Abouts.Headline>Наша Команда</Abouts.Headline>
<Abouts.Conteiner>
    <Abouts.ConteinerIn>
    <Abouts.ConteinerPerson>
        <Abouts.Logo src={PersonPhoto} alt="PersonPhoto"></Abouts.Logo>
        <Abouts.Text>Сергей</Abouts.Text>
    </Abouts.ConteinerPerson>
    <Abouts.ConteinerPerson>
        <Abouts.Logo src={PersonPhoto} alt="PersonPhoto"></Abouts.Logo>
        <Abouts.Text>Сергей</Abouts.Text>
    </Abouts.ConteinerPerson>
    </Abouts.ConteinerIn>
    <Abouts.ConteinerIn>
    <Abouts.ConteinerPerson>
        <Abouts.Logo src={PersonPhoto} alt="PersonPhoto"></Abouts.Logo>
        <Abouts.Text>Сергей</Abouts.Text>
    </Abouts.ConteinerPerson>
    <Abouts.ConteinerPerson>
        <Abouts.Logo src={PersonPhoto} alt="PersonPhoto"></Abouts.Logo>
        <Abouts.Text>Сергей</Abouts.Text>
    </Abouts.ConteinerPerson>
    </Abouts.ConteinerIn>
</Abouts.Conteiner>
        </Abouts.Back>
        )
    }
}
export default About;