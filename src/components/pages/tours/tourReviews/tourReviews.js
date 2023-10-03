import { Row,Col,Card, ListGroup} from 'react-bootstrap';
import './tourReviews.scss';

function tourReviews (arr){
        const items = arr.map((item, i) => {
                     
          return (
            <ListGroup.Item key={i} className='col reviews__item mx-2'>
                <Card className='review p-1'>
                    <Card.Header>
                        <Row>
                            <Col>Клієнтка:</Col>
                            <Col>{item.client}</Col>
                            <Col>Вік:</Col>
                            <Col>{item.age}</Col>
                            <Col>Дата:</Col>
                            <Col>{item.tourDate}</Col>
                        </Row>
                    </Card.Header>
                    <Card.Body className='row'>
                        <Col sm={5}>
                            <Card.Img src={item.touristPic} className='shadow rounded mx-auto' style={{ height:"200px"}}>
                            </Card.Img>
                        </Col>
                        <Col sm={7}>
                            <Card.Text className='p-1 text-justify fs-6'>
                                {item.reviewText}
                            </Card.Text>
                        </Col>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
            )
        })

        return (
                <>
                    <div className='section-title'>Відгуки: </div>
                    <ListGroup className='reviews__list mb-5'>
                        <Row className='reviews__body flex-row'>
                            {items}
                        </Row>
                    </ListGroup>
                </>
        )
}

export default tourReviews;