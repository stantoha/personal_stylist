import React from 'react';
import { Helmet } from 'react-helmet';
import {Container, Row, Col, Stack} from 'react-bootstrap'
import Boxes from '../../boxes/Boxes';

import titleImg from './imgs/ab__me.jpg';
import info1 from './imgs/info.jpg';
import info2 from './imgs/info (2).png';
import info3 from './imgs/info(3).jpg';

import advantage1 from './imgs/figure__shapes.svg';
import advantage2 from './imgs/colorwheel.svg';
import advantage3 from './imgs/clothes.svg';
import advantage4 from './imgs/smart__shopping.svg';
import advantage5 from './imgs/luggage.svg';
import logo from './imgs/logo.svg';
import './home.scss';
const Home = () => {

  Boxes('box')
  
  return (
   <>
      <Helmet>
        <title>Головна</title>
        <meta
            name="description"
            content="personal stylist"
            />
        </Helmet>

      <div className="page home">
        <h6 className="page-title" >Про мене</h6>
        <hr />

        <Container className='section'>
          <Row className='align-items-center position-relative overflow-hidden mx-auto mb-3 w-100 py-3' style={{maxWidth:'1024px'}}>
            <Col sm={5}>
              <img className='box aboutme__img rounded rounded-3' alt='img' src={titleImg} style={{maxWidth:'230px'}}/>
            </Col>
            <Col className="box aboutme__text">
                  Мене звати Аліна і я персональний стиліст.
            </Col>
            <div className="circle box" style={{width:'200px', height:'200px',left:'0%',top:'25%'}}></div>
            <div className="circle box" style={{width:'350px', height:'350px',left:'58%',top:'5%', backgroundColor:'transparent'}}></div>
          </Row>
        
          <Row className='align-items-center position-relative overflow-hidden mx-auto mb-3 w-100 py-3' style={{maxWidth:'1024px'}}>
            <Col className="box aboutme__text">
                  З дитинства обожнюю моду і все що з нею зв‘язано.
            </Col>
            <Col sm={5}>
              <img className='box aboutme__img rounded rounded-3' alt='img' src={info1}  style={{maxWidth:'230px'}}/>
            </Col>
          
            <div className="circle box" style={{width:'600px', height:'600px',left:'15%',bottom:'30%'}}></div>
            <div className="circle box" style={{width:'200px', height:'200px',left:'-5%',bottom:'20%'}}></div>
          </Row>
        
          <Row className='align-items-center position-relative overflow-hidden mx-auto mb-3 w-100 py-3' style={{maxWidth:'1024px'}}>
            <Col sm={5}>
              <img className='box aboutme__img rounded rounded-3' alt='img' src={info2}  style={{maxWidth:'230px'}}/>
            </Col>
            <Col className="box aboutme__text">
                  Моя місія - допомогати клієнтам сформувати такий стиль, який
                      буде відповідати внутрішньому стану, характеру, вподобанням,
                      темпу життя.
            </Col>
            <img className='aboutme__logo' src={logo} alt="logo" style={{width:'200px', height:'200px',left:'60%',bottom:'24%'}}/>
            <div className="circle box" style={{width:'400px', height:'400px',left:'50%',top:'0%'}}></div>
          </Row>
        
          <Row className='align-items-center position-relative overflow-hidden mx-auto mb-3 w-100 py-3' style={{maxWidth:'1024px'}}>
            <Col className="box aboutme__text">
                    Вже більш ніж п’ять років я працюю стилістом та допомагаю
                    людям з усіх куточків світу. Буду рада допомогти і вам
            </Col>
            <Col sm={5}>
              <img className='box aboutme__img rounded rounded-3' alt='img' src={info3}  style={{maxWidth:'230px'}}/>
            </Col>
            <div className="circle box" style={{width:'350px', height:'350px',left:'7%',bottom:'10%', backgroundColor:'transparent'}}></div>
            <div className="circle box" style={{width:'250px', height:'250px',left:'-5%',bottom:'0%', backgroundColor:'transparent'}}></div>
          </Row>
        </Container>

          <div className="box-divider my-5"></div>

        <Container className="section modal_CTA shadow shadow-3 w-75 mx-auto">
          <div className="p-2">
            <div className="box section-title">
            Підпишися, щоб бути в курсі останніх новин стилю та моди
            </div>
          </div>
          
          <form
            className="CTA d-flex flex-wrap gap-4 align-items-center border rounded shadow shadow-3 p-5 px-3"
            action=""
            method="get"
          >
            <input 
            className='fs-4 mx-auto text-muted text-center'
              type="text"
              name="name"
              id="name"
              value="Ваше ім'я"
              onChange={{}}
              required
            />
            <input 
            className='fs-4 mx-auto text-muted text-center'
              type="email"
              name="email"
              id="email"
              value="Ваш email "
              onChange={{}}
              required
            />
            <button
                className="CTA-button p-2 mt-4 mx-auto shadow shadow-3 rounded fst-italic" type="submit" value="Підписатися">Підписатися</button> 
          </form>
        </Container>

        <div className="box-divider my-5"></div>

        <Container className="section my-education  py-5 rounded rounded-3 my-5">
          <h3 className="box box-title mb-5">Моя Освіта</h3>
          <Container>
            <Row className="row-cols-md-2">
              <Col sm={6} className="my-education__item col-md-5 mb-5 mx-auto p-5 rounded shadow shadow-3 box">
                <h5 className="course__title text-uppercase fw-bold">Fashion Styling</h5>
                <div className="box-divider"></div>
                <Stack>
                  <div className="p-2">
                    <a
                  href="https://www.facebook.com/kyivfashioninstitute/"
                  className="study-place p-3 rounded text-decoration-none fst-italic"
                  >Kiev Fashion Institute</a
                  >
                  </div>
                  <div className="box-divider"></div>
                  <div className="fs-5 p-2">
                    <span>2016-2017</span>
                  </div>
                </Stack>
              </Col>
              <Col sm={6} className="my-education__item col-md-5 mb-5 mx-auto p-5 rounded shadow shadow-3 box">
                <h5 className="course__title text-uppercase fw-bold">Fashion Business</h5>
                <div className="box-divider"></div>
                <Stack>
                  <div className="p-2">
                    <a
                  href="https://www.facebook.com/kyivfashioninstitute/"
                  className="study-place p-3 rounded text-decoration-none fst-italic"
                  >Kiev Fashion Institute</a
                  >
                  </div>
                  <div className="box-divider"></div>
                  <div className="fs-5 p-2">
                    <span>2016-2017</span>
                  </div>
                </Stack>
              </Col>
              <Col sm={6} className="my-education__item col-md-5 mb-5 mx-auto p-5 rounded shadow shadow-3 box">
                <h5 className="course__title text-uppercase fw-bold">Персональний стиліст</h5>
                <div className="box-divider"></div>
                <Stack>
                  <div className="p-2">
                    <a
                  href="https://modeis.me/online-course/personal-stylist"
                  className="study-place p-3 rounded text-decoration-none fst-italic"
                  >Школа Modeisme Марагарити Мурадової</a
                  >
                  </div>
                  <div className="box-divider"></div>
                  <div className="fs-5 p-2">
                    <span>2018</span>
                  </div>
                </Stack>
              </Col>
              <Col sm={6} className="my-education__item col-md-5 mb-5 mx-auto p-5 rounded shadow shadow-3 box">
                <h5 className="course__title text-uppercase fw-bold">Персональний баєр</h5>
                <div className="box-divider"></div>
                <Stack>
                  <div className="p-2">
                    <a
                  href="https://www.instagram.com/qatista/"
                  className="study-place p-3 rounded text-decoration-none fst-italic"
                  >Myprofshopping</a
                  >
                  </div>
                  <div className="box-divider"></div>
                  <div className="fs-5 p-2">
                  <span>2020</span>
                  </div>
                </Stack>
              </Col>
                  </Row>
          </Container>
    
        </Container>
        
        <div className="box-divider my-5"></div>
        
        <Container className="section advantages  py-5 rounded rounded-3 my-5">
          
            <h3 className="box box-title mb-5">Переваги в роботі зі стилістом</h3>
          
            <div className="box-divider"></div>

            <div className='section-title'>
            Робота зі стилістом - це захоплюючий процес, в результаті якого ви знайдете свій унікальний стиль.
            </div>
            
            <div className="box-divider"></div>

            <h3 className="box box-title">
                Які переваги отримує клієнт під час та в результаті нашої роботи?
            </h3>

            <ul className="advantages-list">
                <li className="box advantages-item p-4 border rounded shadow rounded-3 shadow-3">
                  <Row className='d-flex align-items-center justify-content-between'>
                    <Col sm={9} className="p-3" style={{maxWidth:'700px'}}>
                    Визначення та розуміння Вашого <i>типу фігури</i> та методів правильного підбору речей.
                    </Col>
                    <Col sm={3} className="p-3">
                    <img src={advantage1} alt='shapes'/>
                    </Col>
                  </Row>
                </li>
                <li className="box advantages-item p-4 border rounded shadow rounded-3 shadow-3">
                  <Row className='d-flex align-items-center justify-content-between'>
                    <Col sm={3} className="p-3">
                    <img src={advantage2} alt='shapes'/>
                    </Col>
                    <Col sm={9} className="p-3" style={{maxWidth:'700px'}}>
                    Гармонійне <i>поєднання кольорів</i> , теорія кольору, визначення основних кольорів Вашого гардеробу.
                    </Col>
                  </Row>
                </li>
                <li className="box advantages-item p-4 border rounded shadow rounded-3 shadow-3">
                  <Row className='d-flex align-items-center justify-content-between'>
                    <Col sm={9} className="p-3" style={{maxWidth:'700px'}}>
                    Вирішення поширенної проблеми: <i>«речей багато, але нема, що вдягнути»</i>
                    </Col>
                    <Col sm={3} className="p-3">
                      <img src={advantage3} alt='shapes'/>
                    </Col>
                  </Row>
                </li>
                <li className="box advantages-item p-4 border rounded shadow rounded-3 shadow-3">
                  <Row className='d-flex align-items-center justify-content-between'>
                  <Col sm={3} className="p-3">
                    <img src={advantage4} alt='shapes'/>
                    </Col>
                    <Col sm={9} className="p-3" style={{maxWidth:'700px'}}>
                    <i>Раціональний підхід</i> до покупок та до формування гардеробу в цілому
                    </Col>
                  </Row>
                </li>
                <li className="box advantages-item p-4 border rounded shadow rounded-3 shadow-3">
                  <Row className='d-flex align-items-center justify-content-between'>
                    <Col sm={9} className="p-3" style={{maxWidth:'700px'}}>
                    Процес зборів на роботу, відпочинок або урочисту подію стане зрозумілим, приємним та допоможе економити <i>Ваш дорогоцінний час</i>. 
                    </Col>
                    <Col sm={3} className="p-3">
                    <img src={advantage5} alt='shapes'/>
                    </Col>
                  </Row>
                </li>
            </ul>

        </Container>
      </div>
   </>

  );
};



export default Home;