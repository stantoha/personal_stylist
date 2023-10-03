import { useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import './newsLetterModal.scss';
const NewsLetterModal = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.box-modal').classList.remove('box-modal-hide')
          }, 5000)
    })

    function hideModal(){
        document.querySelector('.box-modal').classList.add('box-modal-hide')
    }

    return (
        <div className="box-modal box-modal-hide">
            <div className="newsletter-close" aria-hidden="true" onClick={hideModal}>×</div>
            <h3 className="newsletter-title text-center">Залишайся на зв'язку!</h3>
            <div className="newsletter-subtitle">
            Підпишися, щоб першою отримувати ексклюзивні пропозиціі та взнавати про нові модні тренди 
            </div>
            <Form className="newsletter-modal">
                <Row className="align-items-center mx-auto">
                    <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control size="sm" type="email" placeholder="Ваш email" />
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <button size="sm" type="submit" className="CTA-button">
                            Підписатися
                    </button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default NewsLetterModal;
