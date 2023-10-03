import { Container, Row, Col, Image,Stack} from "react-bootstrap";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Boxes from "../../boxes/Boxes";

import YSL from './brandsLogos/YSL.png';
import Prada from './brandsLogos/Prada.png';
import LV from './brandsLogos/LV.png';
import Chanel from './brandsLogos/Chanel.png';
import BV from './brandsLogos/BV.png';
import Gucci from './brandsLogos/Gucci.png';
import Fendi from './brandsLogos/Fendi.png';
import Dior from './brandsLogos/Dior.png';
import Valentino from './brandsLogos/Valentino.png';
import MK from './brandsLogos/MichaelKors.png';
import DG from './brandsLogos/D&G.png';
import JC from './brandsLogos/JC.png';
import CL from './brandsLogos/Christian Louboutin.png';
import Burberry from './brandsLogos/Burberry.png';
import Armani from './brandsLogos/Armani.png';
import './brandsFlow.scss';
         
      
const PersonalStylist = () => {
    Boxes('box')
    useEffect(() => {
        const brands = document.querySelectorAll('.brand');
        
        brands.forEach((brand, i) => {
            (i%2===0) ? (setInterval(()=>{
                brand.classList.add('flowBack')
            },`${(i+1.5)*12000}`))
            :(
                setInterval(()=>{
                    brand.classList.add('flow')
                    
                },`${(i+1.5)*12000}`)
            )
        })
    })

    return (
        <>
            <Helmet>
            <title>Персональний шопер</title>
            <meta
                name="description"
                content="personal stylist"
                />
            </Helmet>

            <div className="page personal">
            
                <h6 className="page-title" >Ваш персональний шопер</h6>
                <hr />
                
                <div className="my-5" style={{ position:'relative'}}>

                    <div className="box section-title">
                    Робота у сфері моди дозволяє розвиватись та не зупинятись на
                    одному напрямку. Саме тому я вирішила частину своєї роботи
                    присвятити баєрству в сегменті люкс та в середньому сегменті.
                    </div>

                    <div className="box-divider"></div>

                    <div className="box-title">Переваги співпраці із персональним шопером:</div>

                    <div className="box-divider"></div>

                    <Stack>
                        <Row>
                            <Col sm={4} className="question mx-auto box border rounded">
                            Хто такий персональний шопер?
                            </Col>
                            <Col sm={8} className="answer mx-auto box border rounded">
                            Персональний шопер-це людина, яка займається пошуком
                            речей для вас, старається знайти позиції за найкращою
                            ціною, дістати неможливе з розряду sold out.
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} className="question mx-auto box border rounded">
                            Для чого звертатись до персонального шопера, якщо можна
                            купити річ самостійно?
                            </Col>
                            <Col sm={8} className="answer mx-auto box border rounded">
                            Звичайно, ви можете це зробити самостійно. Але, в
                            бутіках, які є в нас часто далеко не весь асортимент і
                            ціни відрізняються в багатьох випадках від європейських
                            не в кращу сторону. Крім того, новинки з’являються
                            пізніше.
                            </Col>
                        </Row>
                        <Row>
                        <Col sm={12} style={{ position:'absolute',width:'100%'}}>
                            
                            </Col>
                            <Col sm={4} className="question mx-auto box border rounded">
                            З якими брендами я працюю?
                            </Col>
                            <Col sm={8} className="answer mx-auto box border rounded">
                            Список дуже великий. Це бренди середнього та
                        люкс-сегменту: YSL, Prada, LV, Chanel, Bottega Veneta,
                        Gucci, Fendi, Dior, Valentino та багато інших.
                            </Col>
                            
                        </Row>
                    </Stack>

                    <div style={{position:'absolute', overflow:'x-scroll'}} className="brands flex-wrap">
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Chanel}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Valentino}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={YSL}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={BV}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Prada}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={LV}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Gucci}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Fendi}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Dior}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={CL}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={JC}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={DG}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Armani}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={Burberry}></Image>
                        </Col>
                        <Col>
                            <Image className="brand" style={{height:'200px', width:'auto'}} src={MK}></Image>
                        </Col>
                    </div>
                
                
                <div className="box-divider"></div>
                
                <div className="modal_CTA shadow shadow-3">
                    <div className="p-2">
                    <h3 className="box CTA-title">
                        Хочеш побачити актуальний ассортимент?
                    </h3>
                    </div>
                
                    <button 
                        className="CTA-button" 
                        type="link" 
                        value="Підписатися"
                        href="https://t.me/stoliarova_alina">
                        Підпишися на мій Telegram-канал!
                    </button> 
                </div>

                <div className="box-divider"></div>

                <div className="box-title">Процес вибору та замовлення речі:</div>

                <div className="box-divider"></div>

                <Row>
                    <Row className="row p-5 fs-4 text-start" gap={3}>
                        <Col sm={5} className="question mx-auto box border rounded fs-3 fw-bold fst-italic">
                            Як вибрати річ?
                        </Col>
                        <Col sm={5} className="answer mx-auto box border rounded">
                            Ви можете вибирати з ассортименту на моєму
                            Telegram-каналі або ж надіслати фото бажаної речі в
                            приватні повідомлення за посиланням
                            <a href="@alinastoliarova">@alinastoliarova</a>
                            і я постараюсь знайти її якнайшвидше для вас.
                        </Col>
                    </Row>
                    <Row className="row p-5 fs-4 text-start" gap={3}>
                        <Col sm={5} className="question mx-auto box border rounded fs-3 fw-bold fst-italic">
                        Як дізнатись ціну?
                        </Col>
                        <Col sm={5} className="answer mx-auto box border rounded">
                        Ви можете дізнатись ціну в моєму Telegram-каналі або
                        написавши особисто. Співпраця з бутіками дає мені
                        можливість пропонувати ціни такі ж як ви бачите на
                        офіційному сайті бренду, а інколи і дешевше.
                        </Col>
                    </Row>
                    <Row className="row p-5 fs-4 text-start" gap={3}>
                        <Col sm={5} className="question mx-auto box border rounded fs-3 fw-bold fst-italic">
                        Доставка
                        </Col>
                        <Col sm={5} className="answer mx-auto box border rounded">
                        Доставка в Україну ~ 25Є. Термін доставки з Європи в
                        Україну 10-14 робочих днів. Інколи бувають довші терміни
                        через форс-мажорні обставини (наприклад, затримки на
                        кордонах), на які ми не можемо вплинути.
                        </Col>
                    </Row>
                    <Row className="row p-5 fs-4 text-start" gap={3}>
                        <Col sm={5} className="question mx-auto box border rounded fs-3 fw-bold fst-italic">
                        Оплата/Передоплата
                        </Col>
                        <Col sm={5} className="answer mx-auto box border rounded">
                        Річ викупляється лише зі 100% передоплатою.
                        </Col>
                    </Row>
                    <Row className="row p-5 fs-4 text-start" gap={3}>
                        <Col sm={5} className="question mx-auto box border rounded fs-3 fw-bold fst-italic">
                        Комісія
                        </Col>
                        <Col sm={5} className="answer mx-auto box border rounded">
                        На товари брендів LV, Chanel, Hermès буде додаткова
                        комісія в розмірі 10% від ціни товару.
                        </Col>
                    </Row>
                    <Row className="row p-5 fs-4 text-start" gap={3}>
                        <Col sm={5} className="question mx-auto box border rounded fs-3 fw-bold fst-italic">
                        Податок
                        </Col>
                        <Col sm={5} className="answer mx-auto box border rounded">
                        Додатково нічого оплачувати НЕ ПОТРІБНО.
                        </Col>
                    </Row>
                </Row>
                <div className="box-divider"></div>

                <div className="box section-title">
                Також, я з радістю створю для вас підбірку речей за заданими
                    параметрами (форма, колір, ціна, розмір і т.д.)
                </div>
                </div>
            </div>
        </>
    )
}

export default PersonalStylist;

