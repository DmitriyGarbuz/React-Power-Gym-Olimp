import React, {Component} from 'react';
import Contacts from '../contact/Contact.view';
import MapConteiner from './GoogleMap';

class Contact extends Component {
    render () {
        return (<Contacts.Back>
            <Contacts.Headline>Контакты</Contacts.Headline>
<Contacts.Conteiner>
    <Contacts.Row>
        <Contacts.ConteinerIn>
        <Contacts.TextAfterH1>Наш Адрес</Contacts.TextAfterH1>
        <Contacts.Text>Киев бул. Ромена Ролана 7</Contacts.Text>
        <Contacts.Arhor href="Tel: +380503100458">Тел. +38 (050) 310-04-58</Contacts.Arhor>
        <Contacts.Text>email: mymail@gmail.com</Contacts.Text>
        </Contacts.ConteinerIn>
        <Contacts.ConteinerIn>
        <Contacts.TextAfterH1>График работы</Contacts.TextAfterH1>
         <Contacts.Text>Пн-Пт: с 7-00 по 22-00</Contacts.Text>
         <Contacts.Text>Сб-Вс: с 10-00 по 18-00</Contacts.Text>
        </Contacts.ConteinerIn>
    </Contacts.Row>
    <Contacts.ConteinerMap>
    <MapConteiner/>
    </Contacts.ConteinerMap>
</Contacts.Conteiner>
<Contacts.Futer/>
        </Contacts.Back>
        )
    }
}
export default Contact;