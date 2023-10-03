import React from 'react';
import ReviewCard from '../reviewCard/ReviewCard';
import './reviewsList.css';

const reviewsData = [
  {
    name: 'Анна',
    age: 28,
    city: 'Львів',
    country: 'Україна',
    photo:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80' ,
    service: 'Консультація',
    date: '2023-08-01',
    reviewText:  'Отримала багато цінних порад щодо свого гардеробу. Рекомендую!',
    comments: ['Glad to hear that!', 'Your new look is amazing!']
  },
  {
    name: 'Ольга',
    age: 20,
    city: 'Львів',
    country: 'Україна',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBzNe8mla9BzW9QgN_j-5rvZpvlICNgh56A&usqp=CAU' ,
    service: 'Консультація',
    date: '2023-08-01',
    reviewText:  'Отримала багато цінних порад щодо свого гардеробу. Рекомендую!',
    comments: ['Glad to hear that!', 'Your new look is amazing!']
  },
  {
    name: 'Василина',
    age: 32,
    city: 'Львів',
    country: 'Україна',
    photo:'https://images.prom.ua/4604655124_w640_h2048_v_razdel.jpg?fresh=1&PIMAGE_ID=4604655124',
    service: 'Консультація',
    date: '2023-08-01',
    reviewText: 'Дуже задоволена результатом співпраці з персональним стилістом!',
    comments: ['Glad to hear that!', 'Your new look is amazing!']
  },
  {
    name: 'Інна',
    age: 33,
    city: 'Львів',
    country: 'Україна',
    photo:'https://img.freepik.com/premium-photo/happy-beautiful-young-hipster-woman-with-smile-with-cool-vintage-sunglasses-wearing-trendy-knit-blue-top-pink-jeans-with-fashion-colored-sneakers-sits-retro-yellow-car-sunny-day_338491-15638.jpg',
    service: 'Консультація',
    date: '2023-08-01',
    reviewText: 'Дуже задоволена результатом співпраці з персональним стилістом!',
    comments: ['Glad to hear that!', 'Your new look is amazing!']
  },
  {
    name: 'Ліля',
    age: 26,
    city: 'Львів',
    country: 'Україна',
    photo:'https://images.unsplash.com/photo-1604702770018-55669959b124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    service: 'Консультація',
    date: '2023-08-01',
    reviewText: 'Дуже задоволена результатом співпраці з персональним стилістом!',
    comments: ['Glad to hear that!', 'Your new look is amazing!']
  },
  {
    name: 'Аліна',
    age: 22,
    city: 'Львів',
    country: 'Україна',
    photo:'https://i.pinimg.com/originals/f5/31/54/f53154509b6c7f960b86bb727b3feb56.jpg',
    service: 'Консультація',
    date: '2023-08-01',
    reviewText: 'Дуже задоволена результатом співпраці з персональним стилістом!',
    comments: ['Glad to hear that!', 'Your new look is amazing!']
  },
  // Add more review data here
];

const ReviewsList = () => {
  return (
    <div className="reviews-list">
      <div className="reviews-content">
      {reviewsData.map((review, index) => (
        <ReviewCard  key={index} review={review} />
      ))}
      </div>
    </div>
  );
};

export default ReviewsList;
