import React, { useState,useEffect } from 'react';
import {Button, Image, Stack, ListGroup, Container, Row} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useService from '../../../service/Service';

import Boxes from '../../boxes/Boxes';
import ReviewsList from '../../reviewsList/ReviewsList';
import consult from './imgs/consult.png';
import capsula from './imgs/capsula.jpg';
import shopping from './imgs/shopping.png';
import wardrobe from './imgs/wardrope.png';
import Consult from './imgs/icons/Як вдягати.png'
import Capsula from './imgs/icons/Історія.png';
import Shopping from './imgs/icons/Річ легенда.png';
import Wardrobe from  './imgs/icons/Гід базовий гардероб.png';
import './services.scss';



const Services = () => {
  const [activeTab, setActiveTab] = useState('consultation');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [question, setQuestion] = useState('');
  // const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [service, setService] = useState(0);

  const {getAllServices,  clearError, process,setProcess} = useService();

  const { id, title, name, img, descr,serviceDetails, serviceSteps} = service;

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
}, [])
    const updateData = () => {
    clearError();
    getAllServices(activeTab)
  
            .then(onDataLoaded)
            .then(()=> setProcess('confirmed'))
            console.log(getAllServices(activeTab))

}
const onDataLoaded = (service) => {
    setService(service);
}

  const handleTabClick = (service) => {
    setActiveTab(service);
    console.log(service)
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    // Handle question submission
  };

  
  const handleOrderButtonClick = () => {
      
   };

  const renderServiceContent = () => {
    switch (activeTab) {
      case 'consultation':
        Boxes('box');
       
        return (
          <div className='service-content'>
            
            <Container className="container-fluid">
              <Row className="gap-5">
              <div className="box-divider"></div>

                <div className='box-title box'>Консультація по стилю</div>

                <div className="col d-flex justify-content-center align-items-center  rounded box">
                  <Image src={consult} style={{maxHeight:'400px'}}/>
                </div>

                <div className="col-12 d-flex justify-content-center align-items-center box">
                  <div className='service-info shadow p-3'>
                    <div className='section-title'>
                    Консультація - це перший крок на шляху до змін вашого стилю!
                    </div>
                  </div>
                </div>
                
                <div className="box-divider"></div>

                <div className="col mx-auto">
                  <ListGroup as='ol' numbered className="service-components__list p-3">
                    <div className="box box-title">
                      Консультація по стилю включає:
                    </div>
                    <ListGroup.Item className="service-component box">
                      Аналіз теперішнього стилю і визначення правильного
                      напряму його покращення;
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      Інформацію про те, як можна підкреслити переваги
                      фігури і сховати недоліки;
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      Поради щодо кольорів, фасонів, тканин та текстур,
                      які підходять саме вам;
                    </ListGroup.Item>
                  </ListGroup>
                </div>

                <div className="col mx-auto">
                    
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Тривалість:</div>
                      <div className="p-1 box">1.5 - 2 години</div>
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Чи можлива онлайн:</div>
                      <div className="p-1 box"><span>&#10004;</span></div>
                      </Stack>
                      
                      <Stack className="col d-flex justify-content-center align-items-center py-3 mt-3 fs-5">
                      Також під час консультації ви зможете задати усі питання, які вас цікавлять .
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Ціна:</div>
                      <div className="p-1 box">100</div>
                      </Stack>
                      
                    </div>
                
                <div className="box-divider"></div>

                <div className="col-12">
                  <h4 className='mb-5'>Відгуки клієнтів</h4>
                  <div className="reviews-list-container">
                    <ReviewsList/>
                  </div>
                </div>

                <div className="box-divider"></div>

                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Цікавлять деталі?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    {isLoggedIn ? (
                    <div>
                      <textarea
                        placeholder="Ask a question..."
                        value={question}
                        onChange={handleQuestionChange}
                      ></textarea>
                      <button onClick={handleQuestionSubmit}>
                        Підтвердіть
                      </button>
                      </div>) : (
                      <div className='fs-3'>Будь ласка, залогінся та напиши своє запитання!</div>
                    )}
                    </div>
                  </Stack>
                
                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Готова до змін?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    <Button className='order-btn shadow' variant="outline-danger" size='lg' onClick={handleOrderButtonClick}>
                      Запишися на консультацію!
                    </Button>
                    </div>
                  </Stack>
                
                
              </Row>
            </Container>
            
          </div>
        );
      case 'wardrobe':
        Boxes('box');
      
        return (
          <div className='service-content'>

            <Container className="container-fluid">
              <Row className="gap-5"> <div className="box-divider"></div>
              <div className='box-title box'>Розбір гардеробу</div>
                <div className="col d-flex justify-content-center align-items-center  rounded box">
                  <Image src={wardrobe} style={{maxHeight:'400px'}}/>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className='service-info shadow p-3'>
                    <div className='section-title'>
                    Якщо ви втомились від свого гардеробу, постійно вдягаєте
                    одне і те саме, не бачите ніяких цікавих комплектів в
                    гардеробі, а деякі речі ще досі лежать з бірками, тоді ця
                    послуга для вас!
                    </div>
                  </div>
                </div>
                
                <div className="box-divider"></div>

                <div className="col mx-auto">
                  <ListGroup as='ol' numbered className="service-components__list p-3">
                    <div className="box box-title">
                     Як відбувається розбір гардеробу?
                    </div>
                    <ListGroup.Item className="service-component box">
                    Процес розбору гардеробу відбувається у клієнта вдома.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    Речі, які є у вас відсортовуються на певні категорії.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    Ми обговорюємо ваш напрям стилю, тип фігіри, кольори, які вам пасують та багато інших нюансів.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      В гардеробі залишаємо той одяг і аксесуари, які
                      будуть працювати на вас, а не створювати ілюзію
                      присутності в шафі.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      Імовірно, що з деякими речима, треба буде
                      розпрощатись, але на їхнє місце прийдуть значно
                      кращі.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      В процесі розбору я допоможу вам сформувати десятки
                      комплектів з тих речей, які залишаються.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      Ми обов‘язково зробимо фото нових образів аби ваші
                      майбутні збори стали ще приємніші!
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                      Також протягом п’яти робочих днів після розбору буде
                      сформований шопінг-лист.
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div className="col mx-auto">
                    
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Тривалість:</div>
                      <div className="p-1 box">1.5 - 2 години</div>
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Чи можлива онлайн:</div>
                      <div className="p-1 box"><span>&#10004;</span></div>
                      </Stack>
                      
                      <Stack className="col d-flex justify-content-center align-items-center py-3 mt-3 fs-5">
                      Також під час консультації ви зможете задати усі питання, які вас цікавлять .
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Ціна:</div>
                      <div className="p-1 box">$100</div>
                      </Stack>
                      
                </div>
                
                <div className="box-divider"></div>

                <div className="col-12">
                  <h4 className='mb-5'>Відгуки клієнтів</h4>
                  <div className="reviews-list-container">
                    <ReviewsList/>
                  </div>
                </div>

                <div className="box-divider"></div>

                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Цікавлять деталі?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    {isLoggedIn ? (
                    <div>
                      <textarea
                        placeholder="Ask a question..."
                        value={question}
                        onChange={handleQuestionChange}
                      ></textarea>
                      <button onClick={handleQuestionSubmit}>
                        Submit
                      </button>
                      </div>) : (
                      <div className='fs-3'>Будь ласка, залогінся та напиши своє запитання!</div>
                    )}
                    </div>
                  </Stack>
                
                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Готова до змін?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    <Button className='order-btn shadow' variant="outline-danger" size='lg' onClick={()=>handleOrderButtonClick}>
                      Запишися на консультацію!
                    </Button>
                    </div>
                  </Stack>
                
                
              </Row>
            </Container>
            
          </div>
        );
      case 'shoppingAssist':
        Boxes('box');
      
        return (
          <div className='service-content'>
          
            <Container className="container-fluid">
              <Row className="gap-5"> <div className="box-divider"></div>
                <div className='box-title box'>Шопінг-супровід</div>

                <div className="col d-flex justify-content-center align-items-center  rounded box">
                  <Image src={shopping} style={{maxHeight:'400px'}}/>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className='service-info shadow p-3'>
                    <div className='section-title'>
                    Шопінг-супровід допоможе позбавитись проблеми імпульсивних і
                    непотрібних покупок і зібрати гардероб, який буде працювати
                    на всі 100%.
                    </div>
                  </div>
                </div>
                
                <div className="box-divider"></div>

                <div className="col mx-auto">
                  <ListGroup as='ol' numbered className="service-components__list p-3">
                    <div className="box box-title">
                  Шопінг-супровід включає:
                    </div>
                    <ListGroup.Item className="service-component box">
                    Речі в процесі шопінгу підбираються функціональні:
                            щоб відповідали обраному напряму стилю і пасували до
                            того, що є в гардеробі.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    Перед наданням послуги, ми обов’язково проговорюємо
                            бюджет та цілі шопінгу.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    Також я складаю шопінг-маршрут індивідуально для
                            кожного клієнта та роблю попередній самостійний
                            прешопінг для максимальної економії вашого часу.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    В процесі шопінгу розповідаю яким чином обирати
                            правильні речі, на що акцентувати увагу, як знайти
                            те, що буде ідеально пасувати вам.
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div className="col mx-auto">
                    
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Тривалість:</div>
                      <div className="p-1 box">1.5 - 2 години</div>
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Чи можлива онлайн:</div>
                      <div className="p-1 box"><span>&#10004;</span></div>
                      </Stack>
                      
                      <Stack className="col d-flex justify-content-center align-items-center py-3 mt-3 fs-5">
                      Також під час консультації ви зможете задати усі питання, які вас цікавлять .
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Ціна:</div>
                      <div className="p-1 box">$100</div>
                      </Stack>
                      
                </div>
                
                <div className="box-divider"></div>

                <div className="col-12">
                  <h4 className='mb-5'>Відгуки клієнтів</h4>
                  <div className="reviews-list-container">
                    <ReviewsList/>
                  </div>
                </div>

                <div className="box-divider"></div>

                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Цікавлять деталі?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    {isLoggedIn ? (
                    <div>
                      <textarea
                        placeholder="Ask a question..."
                        value={question}
                        onChange={handleQuestionChange}
                      ></textarea>
                      <button onClick={handleQuestionSubmit}>
                        Submit
                      </button>
                      </div>) : (
                      <div className='fs-3'>Будь ласка, залогінся та напиши своє запитання!</div>
                    )}
                    </div>
                  </Stack>
                
                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Готова до змін?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    <Button className='order-btn shadow' variant="outline-danger" size='lg' onClick={handleOrderButtonClick}>
                      Запишися на консультацію!
                    </Button>
                    </div>
                  </Stack>
                
                
              </Row>
            </Container>
            
          </div>
        );
      case 'capsuleWardrobe':
        Boxes('box');
      
        return (
          <div className='service-content'>
         
            <Container className="container-fluid">
              <Row className="gap-5">
              <div className="box-divider"></div>
                <div className='box-title box'>Капсульний гардероб</div>

                <div className="col d-flex justify-content-center align-items-center  rounded box">
                  <Image src={capsula} style={{maxHeight:'400px'}}/>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className='service-info shadow p-3'>
                    <div className='section-title'>
                    Я з радістю допоможу вам сформувати капсульний гардероб в
                    офіс з 10/15/20 речей, в якому будуть десятки комплектів.                    
                    </div>
                  </div>
                </div>
                
                <div className="box-divider"></div>

                <div className="col mx-auto">
                  <ListGroup as='ol' numbered className="service-components__list p-3">
                    <div className="box box-title">
                  Що ви отримаєте в результаті?
                    </div>
                    <ListGroup.Item className="service-component box">
                    Результатом буде презентація, де зібрана інформація
                            про ваш тип фігури, методи роботи з нею.ння;
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    Ви отримаєте важливі поради по фасонах, силуетах,
                            кольорах, принтах, які будуть працювати
                            найефективніше.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    Капсульний гардероб буде складений з 10/15/20 речей
                            з посиланням на кожну з них.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    В презентації ви побачите 40-60 створених образів в
                            рамках нової капсули.
                    </ListGroup.Item>
                    <ListGroup.Item className="service-component box">
                    До кожної речі я додаю посилання і 3-5
                            альтернативних варіанта.
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div className="col mx-auto">
                    
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Термін виконання:</div>
                      <div className="p-1 box"> 5-7 робочих днів після отримання всіх необхідних
                            даних</div>
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Чи можлива онлайн:</div>
                      <div className="p-1 box"><span>&#10004;</span></div>
                      </Stack>
                      
                      <Stack className="col d-flex justify-content-center align-items-center py-3 mt-3 fs-5">
                      Також під час консультації ви зможете задати усі питання, які вас цікавлять .
                      </Stack>
                      
                      <Stack direction='horizontal' gap={3} className='col d-flex justify-content-center align-items-center py-3 mt-3 fs-5'>
                      <div className="p-1 box">Ціна:</div>
                      <div className="p-1 box">$100</div>
                      </Stack>
                      
                </div>
                
                <div className="box-divider"></div>

                <div className="col-12">
                  <h4 className='mb-5'>Відгуки клієнтів</h4>
                  <div className="reviews-list-container">
                    <ReviewsList/>
                  </div>
                </div>

                <div className="box-divider"></div>

                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                      Цікавлять деталі?
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    {isLoggedIn ? (
                    <div>
                      <textarea
                        placeholder="Ask a question..."
                        value={question}
                        onChange={handleQuestionChange}
                      ></textarea>
                      <button onClick={handleQuestionSubmit}>
                        Submit
                      </button>
                      </div>) : (
                      <div className='fs-3'>Будь ласка, залогінся та напиши своє запитання!</div>
                    )}
                    </div>
                  </Stack>
                
                  <Stack className="cta  border border-1 shadow shadow-3 rounded p-3 mb-5">
                    <div className="cta__title">
                    Капсульний гардероб можна сформувати як на сезон, так і
                        на певні події, поїздки. Гардероб у вигляді капсули
                        створюється відповідно до ваших потреб, вподобань, типу
                        фігури.
                    </div>
                    <div className="box-divider"></div>
                    <div className="p-3">
                    <Button className='order-btn shadow' variant="outline-danger" size='lg' onClick={handleOrderButtonClick}>
                      Запишися на консультацію!
                    </Button>
                    </div>
                  </Stack>
                
                
              </Row>
            </Container>
            
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Послуги</title>
        <meta
            name="description"
            content="personal stylist"
            />
      </Helmet>
      <div className='page services'>
      
        <h6 className="page-title" >Мої послуги</h6>
        <hr />

      <Container>
        <Row className="service-tabs gap-3 mx-3">

          <button
            className={activeTab === 'consultation' ? 'active service-tab col shadow shadow-3 border border-3 rounded rounded-3' : 'col service-tab shadow shadow-3 border border-3 rounded rounded-3'}
            onClick={() => handleTabClick('consultation')}
          >
            <div className="service-tab__inner d-flex text-shadow align-items-center" >
            <Image className='service-icon border border-3 text-white' style={{height:"50px"}} src={Consult} />Консультація
            </div>
          </button>

          <button
            className={activeTab === 'wardrobe' ? 'active service-tab col shadow shadow-3 border border-3 rounded rounded-3' : 'col service-tab shadow shadow-3 border border-3 rounded rounded-3'}
            onClick={() => handleTabClick('wardrobe')}
          >
            <div className="service-tab__inner d-flex text-shadow align-items-center" >
            <Image className='service-icon border border-3 text-white' style={{height:"50px"}} src={Wardrobe}/> Розбір гардеробу
            </div>
          </button>

          <button
            className={activeTab === 'shoppingAssist' ? 'active service-tab col shadow shadow-3 border border-3 rounded rounded-3' : 'col service-tab shadow shadow-3 border border-3 rounded rounded-3'}
            onClick={() => handleTabClick('shoppingAssist')}
          >
            <div className="service-tab__inner d-flex text-shadow align-items-center" >
            <Image className='service-icon border border-3 text-white' style={{height:"50px"}} src={Shopping}/> Шопінг-супровід
            </div>
          </button>

          <button
            className={activeTab === 'capsuleWardrobe' ? 'active service-tab col shadow shadow-3 border border-3 rounded rounded-3' : 'col service-tab shadow shadow-3 border border-3 rounded rounded-3'}
            onClick={() => handleTabClick('capsuleWardrobe')}
          >
            <div className="service-tab__inner d-flex text-shadow align-items-center" >
            <Image className='service-icon border border-3 text-white' style={{height:"50px"}} src={Capsula} />Капсульний гардероб
            </div>
          </button>

        </Row>
      </Container>
        <hr/>
        <Container>
        {renderServiceContent()}
        </Container>
      </div>
    </>
  );
};

export default Services;



