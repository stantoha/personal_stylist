import React from 'react';
import { Link } from 'react-router-dom';
import {  Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark p-5'>
      <Container>
        <Row  className="d-flex flex-wrap flex-md-nowrap justify-content-md-around">
          <Col className='col-md-4 col-lg-3'>
            <div className="flex-column flex-grow-1 pe-3 fw-bold text-white text-start" variant='light'>
                <h4>Меню: </h4>         
                <Link 
                to="/"
                className="nav-link text-white decoration-none mt-2 active" 
                aria-current="page" 
                >
                  Про мене
                  </Link>
           
                <Link 
                to="/services" 
                className="nav-link text-white decoration-none mt-2">
                  Послуги
                  </Link>
                          
                <Link 
                to="/personal-stylist" 
                className="nav-link text-white decoration-none mt-2">
                  Персональний шопер
                  </Link>
                          
                <Link 
                to="/tours" 
                className="nav-link text-white decoration-none mt-2">
                  Тури
                  </Link>
                          
                <Link 
                to="/gift-card" 
                className="nav-link text-white decoration-none mt-2">
                  Подарунковий сертифікат
                  </Link>
                          
                <Link 
                to="/appointments" 
                className="nav-link text-white decoration-none mt-2">
                  Форма замовлення
                  </Link>
                          
            </div>
          </Col>
          <Col className='col-md-4 col-lg-3'>
            <div className="flex-column flex-grow-1 pe-3 fw-bold text-white text-start" variant='light'>
                <h4>Меню: </h4>         
                <Link 
                to="/"
                className="nav-link text-white decoration-none mt-2 active" 
                aria-current="page" 
                >
                  Про мене
                  </Link>
           
                <Link 
                to="/services" 
                className="nav-link text-white decoration-none mt-2">
                  Послуги
                  </Link>
                          
                <Link 
                to="/personal-stylist" 
                className="nav-link text-white decoration-none mt-2">
                  Персональний шопер
                  </Link>
                          
                <Link 
                to="/tours" 
                className="nav-link text-white decoration-none mt-2">
                  Тури
                  </Link>
                          
                <Link 
                to="/gift-card" 
                className="nav-link text-white decoration-none mt-2">
                  Подарунковий сертифікат
                  </Link>
                          
                <Link 
                to="/appointments" 
                className="nav-link text-white decoration-none mt-2">
                  Форма замовлення
                  </Link>
                          
            </div>
          </Col>
          <Col className='col-md-4 col-lg-3'>
            <div className="contact-info text-white text-start">
              <h4>Контакти</h4>
              <div className='mt-2'>Адреса: 123 Aбвгд, Lviv, Ukraine</div>
              <div className='mt-2'>
                <a className='text-white decoration-none' href="tel:+38 096 740 7500">
                  Моб: +38 096 740 7500
                </a>
              </div>
              <div className='mt-2'>
                <a href="mailto:alinka199@gmail.com" className="text-white">
                  Email: alinka199@gmail.com
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="bg-white m-5 mx-auto w-75" style={{height:'3px'}}></div>

      <div className="dev-info text-white mt-5">
        <div className='p-3'>
          Developed by Your Name. All rights reserved.
          <br />
          <Link to="/terms">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
