import React, {Component} from 'react';
import logo from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import Headers from './Header.view';

class Header extends Component {
    render () {
        return (
        <Headers.Wraper>
          <Headers.MobLogoGlobal>
          <Headers.MobLogoRow>
          <Headers.MobLogo>
          <NavLink to="/">
          <Headers.Logo src ={logo} alt="logo"></Headers.Logo>
          </NavLink>
          </Headers.MobLogo>
          <Headers.MobRight></Headers.MobRight>
          </Headers.MobLogoRow>
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