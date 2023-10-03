import { Container,Row,Col,Card} from 'react-bootstrap';
import TourMap from '../tourMap/TourMap';
import toursSlider from '../toursSlider/toursSlider';
import './tourProgram.css';

function tourProgram (arr){
        const items = arr.map((item, i) => {
                     
          return (
           
                <li key={i} className='col col-md-6'>
                  <div className="flip-card position-relative mb-5 shadow-3">
                  <Card className="front rounded">
                      <Card.ImgOverlay style={{height:'100%'}}>
                          {toursSlider(item.dayImgs,i,'day-img')}
                      </Card.ImgOverlay>
                      <Card.Title className="day-title position-fixed">
                        <h2 className='day'>
                            {item.day}
                        </h2><br/>
                        <span className='day-route'>
                            {item.dayRoute.join('/')}
                        </span>
                      </Card.Title>
                      
                  </Card>
                  <div className="back rounded">
                      <Container className="details">
                        <h5>Маршрут на день</h5>
                        <Row>
                            {/* <Col>{TourMap(item.dayRoute)}</Col> */}
                            <Col className='text-start'>{item.dayDescr}</Col>
                        </Row>
                      </Container>
                  </div>
                  </div>
                </li>
           
            )
        })

        return (
                    <ul sm={1} md={2} lg={2}  className="row w-100 position-relative mb-5">
                    {items}
                    </ul>
        )
}

export default tourProgram;