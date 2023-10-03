import { Container,Row,Col,Stack } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Boxes from '../../boxes/Boxes';
import front from './imgs/gift__card__frontside.png';
import back from './imgs/gift__card__backside.png';

import  './giftCard.scss';
 const GiftCard = () => {
    Boxes('box')
    return (
        <>
        <Helmet>
                <title>Подарунковий сертифікат</title>
                <meta
                    name="description"
                    content="personal stylist"
                    />
        </Helmet>
        <div className="page gift-card">
            
            <h6 className="page-title">Подарунковий сертифікат</h6>
            <hr />

            <div className="box box-title">
            Хочете зробити приємний подарунок мамі/подрузі/колезі?
            </div>
            
            <div className='box section-title'>Подарунковий сертифікат вам в цьому допоможе!</div>
            
            <div className="box-divider"></div>

            <div className="flip-card-box mx-auto">
                <div className="flip-card">
                    
                    <img className="front rounded shadow shadow-3" src={front} alt={`${front}`}/>
                    
                    <img className="back rounded shadow shadow-3" src={back} alt={`${back}`}/>
                </div>
            </div>
            
            <div className="box-divider"></div>

            <div className='box section-title'>
                    Ви можете обрати сертифікат на конкретну послугу або з
                    визначеною сумою.
            </div>

            <div className="box-divider"></div>

            <div className="box modal_CTA p-5 my-5">
                <h3 className="CTA-title mb-5">Дізнайся більше!</h3>
                <Container>
                <Row md={3} className="align-items-center">
                    <Col md={5} className='shadow rounded p-3'>
                        <form className="CTA-form gap-3 fs-4" method="get">
                           
                            <textarea
                            className="message text-center"
                            name="message"
                            placeholder="Напиши своє запитання"
                            >
                            </textarea>
                            <button className="CTA-button" type="submit">Відправити</button>
                        </form>
                    </Col>
                    <Col md={2} className='fs-4'>
                        АБО
                    </Col>
                    <Col md={5} className='shadow rounded p-3'>
                        <Stack className='fs-3' gap={3}>
                            <div>
                                Зателефонуй!
                            </div>
                            <div>
                                <a name='24/7' className='text-danger text-decoration-none' href="tel:+38 096 740 7500">
                                +38 096 740 7500
                                </a>
                            </div>
                        </Stack>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default GiftCard;
