import toursSlider from '../toursSlider/toursSlider';
import { Container,Row,Col} from 'react-bootstrap';


function DescriptionBlocks (arr){
    const items = arr.map((item, i) => {
                    
    return (
        <li key={i} className="shadow-3">
            {/* <div className="box-title">
                {item.title}
            </div> */}
            {i!==2?
            (<Row className={i%2===0 ? `single-tour__descr flex-row`:`single-tour__descr flex-row-reverse`}>
                <div className="box-title">
                    {item.title}
                </div>
                <Col md={6} className='single-tour__descr-text'>
                    {item.text}
                </Col>
                <Col md={6} className='single-tour__descr-img'>
                    {toursSlider(item.imgs,i)}
                </Col>
            </Row>)
            :(
                <Row className={i%2===0 ? `single-tour__descr flex-row`:`single-tour__descr flex-row-reverse`}>
                <div className="box-title">
                    {item.title}
                </div>
                <Col sm={12} className='single-tour__descr-text'>
                    {item.text}
                </Col>
                <Col sm={12} className='single-tour__descr-img'>
                    {toursSlider(item.imgs,i)}
                </Col>
            </Row>
            )
        }
        </li>
        )
            
    })

    return (
        <ul className='w-100'>
            {items}
        </ul>
    )
}

export default DescriptionBlocks;