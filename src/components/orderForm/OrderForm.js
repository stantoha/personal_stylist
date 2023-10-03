import { Form,  Row, Col, Button} from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
function OrderForm (dates, seats)  {

  const { Formik } = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    date: yup.string().required(),
    seat: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

 
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Enter Your name',
        lastName: 'Enter Your last name',
        date: '',
        seat: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className='border border-1 rounded p-5 mx-auto' style={{maxWidth:'1024px'}}>
          
          <Row className='mb-3'>
            <Col md='6'>
              <Form.Group controlId="validationFormik01">
                <Form.Label>Ім'я</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik02">
                <Form.Label>Прізвище</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Чудово!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik03">
                <Form.Label>Виберіть дату: </Form.Label>
                <Form.Select 
                  aria-label="Default select example"
                  type="select"
                  placeholder="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  isInvalid={!!errors.date}>
                  <option value="">Виберіть дату</option>
                    {dates.map((date) => (
                      <option key={date.dateId} value={date}>
                        {date.date}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            
            <Form.Group as={Col} md='6' className='p-3 border border-1' controlId="validationFormik04">
              <Form.Label className='text-center'>Виберіть місце: </Form.Label>
              <Row className='row-cols-4 mx-auto'>
              {seats.slice(0,26).map((seat) => (
                  <Form.Check 
                    className={`mx-auto my-2 border border-1 text-center fw-bold ${seat.status?'text-success':'text-danger'}`} 
                    as={Col}
                    type="radio"
                    >
                      <Form.Check.Input 
                        className="mx-auto"
                        disabled={seat.status ? false : true}
                        type='radio'
                        placeholder="місце"
                        name="seat"
                        value={values.seat}
                        onChange={handleChange}
                        isInvalid={!!errors.seat}
                        key={seat.seat} 
                        id={`inline-radio-${seat.seat}`} 
                      />
                      <Form.Check.Label>
                        {`${seat.seat}`}
                      </Form.Check.Label>
                  </Form.Check>
                  ))} 

              <Col className='my-1'></Col>
              <Col className='my-1'></Col>

              {seats.slice(26,53).map((seat) => (
                  <Form.Check 
                    className={`mx-auto my-2 border border-1 text-center fw-bold  ${seat.status?'text-success':'text-danger'}`} 
                    as={Col}
                    type="radio"
                    >
                      <Form.Check.Input 
                        className="mx-auto"
                        disabled={seat.status ? false : true}
                        type='radio'
                        placeholder="місце"
                        name="seat"
                        value={values.seat}
                        onChange={handleChange}
                        isInvalid={!!errors.seat}
                        key={seat.seat} 
                        id={`inline-radio-${seat.seat}`} 
                      />
                      <Form.Check.Label>
                        {`${seat.seat}`}
                      </Form.Check.Label>
                  </Form.Check>
              ))}
              </Row>

              <Form.Control.Feedback type="invalid">
                {errors.seat}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>

          <Button type="submit">Підтвердити</Button>
        </Form>
      )}
    </Formik>
    
  );
};
export default OrderForm;
