import React, {Component} from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import Headers from './Header.view';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
navbar: false,
    }
  }
getNavbar = () => {
  if (this.state.navbar !== true ){
this.setState({navbar: true})
}
else{this.setState({navbar: false});}
  }

    render () {
        return (
        <Headers.Wraper>
          <Headers.TopDiv></Headers.TopDiv>
          <Headers.MobLogoGlobal>
            <Headers.MobTop>
          <Headers.MobLogo>        
          <Headers.Logo src ={logo} alt="logo" onClick={this.getNavbar}></Headers.Logo>
          </Headers.MobLogo>
          </Headers.MobTop>
          {this.state.navbar !== false ? 
          <Headers.ConteinerMob>
          <Headers.NavUl>
            <Headers.NavLi><NavLink to="/">Главная</NavLink></Headers.NavLi>
            <Headers.NavLi><NavLink to="/about">О Нас</NavLink></Headers.NavLi>
            <Headers.NavLi><NavLink to="/gallery">Галерея</NavLink></Headers.NavLi>
            <Headers.NavLi><NavLink to="/price">Цены</NavLink></Headers.NavLi>
            <Headers.NavLi><NavLink to="/contacts">Контакты</NavLink></Headers.NavLi>
          </Headers.NavUl>
        </Headers.ConteinerMob>
          : ''}
          </Headers.MobLogoGlobal>

          <Headers.DivLogo>
          <NavLink to="/">
          <Headers.Logo src ={logo} alt="logo"></Headers.Logo>
          </NavLink>
          </Headers.DivLogo>
 <Headers.Conteiner>
      <Headers.NavUl>
        <Headers.NavLi><NavLink to="/">Главная</NavLink></Headers.NavLi>
        <Headers.NavLi><NavLink to="/about">О Нас</NavLink></Headers.NavLi>
        <Headers.NavLi><NavLink to="/gallery">Галерея</NavLink></Headers.NavLi>
        <Headers.NavLi><NavLink to="/price">Цены</NavLink></Headers.NavLi>
        <Headers.NavLi><NavLink to="/contacts">Контакты</NavLink></Headers.NavLi>
      </Headers.NavUl>
    </Headers.Conteiner>
        </Headers.Wraper>
        )
    }
}

export default Header;