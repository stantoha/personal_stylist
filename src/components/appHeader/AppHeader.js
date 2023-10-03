import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Container, Image} from 'react-bootstrap';

import logo from './icons/logo.png';
import aboutme from './icons/aboutme.png';
import services from './icons/services.png';
import tours from './icons/tours.png';
import shopping from './icons/shopping.png';
import gift from './icons/gift.png';

import './appHeader.scss';
const AppHeader = () => {
  const [activeNavLink, setActiveNavLink] = useState([0]);

    const handleTabClick = (i) => {
    setActiveNavLink(i);
  };
  
  
  return (
    <Container fluid>
      <Nav className="navbar navbar-expand-md rounded" aria-label="Navbar">
        <Container fluid>
          
          <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbar">
            <Link className="navbar-brand col-lg-3 me-0 d-flex flex-wrap " to="/">
              <Image src={logo}  alt="logo" className="App-logo mx-2 me-3" />
              <div className='App-title'>
                Аліна Столярова<br/> 
                <span className="App-subtitle">
                Персональний стиліст
                </span>
              </div>
            </Link>
            <ul className="navbar-nav col-lg-9 d-flex justify-content-end">
              <li className="nav-item me-1">
                <NavLink end style={({isActive}) => ({color:isActive ? 'faa25a' : 'inherit'})} to="/" className="nav-link">
                  <Image src={aboutme} alt="icon" className="app__nav-icon"/>
                  Про мене</NavLink>
              </li>
              <li className="nav-item me-1">
                <NavLink style={({isActive}) => ({color:isActive ? 'faa25a' : 'inherit'})} to="/services" className="nav-link">
                  <Image src={services} alt="icon" className="app__nav-icon"/>
                  Послуги</NavLink>
              </li>
              <li className="nav-item me-1">
                <NavLink style={({isActive}) => ({color:isActive ? 'faa25a' : 'inherit'})} to="/personal-stylist" className="nav-link">
                  <Image src={shopping} alt="icon" className="app__nav-icon"/>
                  Персональний шопер</NavLink>
              </li>
              <li className="nav-item me-1">
                <NavLink style={({isActive}) => ({color:isActive ? 'faa25a' : 'inherit'})} to="/tours" className="nav-link">
                  <Image src={tours} alt="icon" className="app__nav-icon"/>
                  Тури</NavLink>
              </li>
              <li className="nav-item me-1">
                <NavLink style={({isActive}) => ({color:isActive ? 'faa25a' : 'inherit'})} to="/gift-card" className="nav-link">
                  <Image src={gift} alt="icon" className="app__nav-icon"/>
                  Подарунковий сертифікат</NavLink>
              </li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          </div>
        </Container>
      </Nav>
    </Container>
  );
};

export default AppHeader;
