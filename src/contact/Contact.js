import React, {Component} from 'react';
import Contacts from '../contact/Contact.view';
import MapConteiner from './GoogleMap';

class Contact extends Component {
    render () {
        return (<Contacts.Back>
            <Contacts.Headline>Контакты</Contacts.Headline>
<Contacts.Conteiner>
    <div>
        <h2>Наш Адрес</h2>
        <p>Киев бул. Ромена Ролана 7</p>
        <p>Телефон: +38 (050) 310-04-58</p>
        <p>email: </p>
    </div>
    <Contacts.ConteinerMap>
    <MapConteiner/>
    </Contacts.ConteinerMap>
</Contacts.Conteiner>
<Contacts.Futer></Contacts.Futer>
        </Contacts.Back>
        )
    }
}
export default Contact;