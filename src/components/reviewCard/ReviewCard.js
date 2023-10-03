import React, { useState } from 'react';
import { Stack, Accordion, Container, Row, Col, Image, Button } from 'react-bootstrap';

const ReviewCard = ({ review }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(review.comments);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };


  return (

    <Container className="review-card shadow shadow-3 bg-light rounded">
      <Row>
        <Col sm={12} className='mb-3'>
        <Stack direction='horizontal' gap={3}>
              <div className='shadow p-1'>
                {review.name} ( {review.age} р.)
              </div>
              {/* <div className='shadow p-1'>
                 {review.age} р.
              </div> */}
              <div className='shadow p-1 ms-auto'>
                 {review.city}, {review.country}
              </div>
            </Stack>
        </Col>
        <Col md={4}>
        <Image className='review-img' src={review.photo} alt={`${review.name}'s Photo`} />
        </Col>
        <Col md={8} className='p-3'>
          <Stack direction='horizontal' gap={3}>
            <div className='fw-bold p-1' style={{fontSize:'12px'}}>
              <span className='d-none d-lg-inline fw-normal'>Послуга:</span>
               {review.service}
            </div>
            <div className='fw-bold p-1 ms-auto' style={{fontSize:'12px'}}>
              <span className='d-none d-lg-inline fw-normal'>Дата:</span>
               {review.date}
            </div>
          </Stack>
          <hr></hr>
          <div className="p-1 text-start fs-5">
            {review.reviewText}
            <Accordion>
              <Accordion.Item  style={{maxHeight:'30x'}} eventKey="0">
                <Accordion.Header>
                <h6>Коментарі:</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className='p-1'>
                    <Col sm={7} className="fs-6 text-start">
                      {comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                      ))}
                    </Col>
                    <Col sm={5} className="fs-6 text-start">
                    <textarea
                      placeholder="Ваш коментар..."
                      value={newComment}
                      onChange={handleCommentChange}
                      rows={1}
                      ></textarea>

                    <Button variant="warning" size='sm' onClick={handleAddComment}>Додати</Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>

  );
};

export default ReviewCard;
