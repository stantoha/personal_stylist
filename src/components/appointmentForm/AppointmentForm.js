import React, { useState } from 'react';
import Boxes from '../boxes/Boxes';
function AppointmentForm ({ selectedService})  {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the order object with the form data
    const order = {
      service: selectedService,
      name,
      lastName,
      dateOfBirth,
      selectedDate,
      paymentMethod,
      termsAccepted,
    };

    // Call the handleFormSubmit function to submit the order
    // handleFormSubmit(order);
  };

  Boxes('box')

  return (
    <div  className='d-flex flex-column justify-content-between align-items-center p-5'>
      <h2>Форма замовлення<br/>
      <small>{selectedService}</small>
      </h2>
      <form
      className='row gap-2 p-5 my-5 border rounded shadow'
      onSubmit={handleSubmit}>
        <label className='box col-12 col-md-4 py-3 border rounded shadow'>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className='box col-12 col-md-4 py-3 border rounded shadow'>
          Прізвище:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label className='box col-12 col-md-4 py-3 border rounded shadow'>
          Дата народження:
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </label>
        <label className='box col-12 col-md-4 py-3 border rounded shadow'>
          Дата туру:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </label>
        <label className='box col-12 col-md-4 py-3 border rounded shadow'>
          Виберіть спосіб оплати:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="bankCard">Bank Card</option>
            <option value="applePay">Apple Pay</option>
            <option value="googlePay">Google Pay</option>
          </select>
        </label>
        
        <div className="">
        <label className='box col-12 col-md-4 py-3 border rounded shadow'>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          Я приймаю умови
        </label>
        <button 
            className="CTA-button w-50 p-2 mt-4 mx-auto shadow shadow-3 rounded fst-italic" 
            type="submit" 
            value="Підписатися"
            href="https://t.me/stoliarova_alina">
            Підтвердити замовлення
        </button> 
        </div>
        
      </form>
    </div>
  );
};

export default AppointmentForm;
