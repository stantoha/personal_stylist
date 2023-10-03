import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import Spinner from '../spinner/Spinner';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.scss';

const Page404 = lazy(() => import ('../pages/404'));
const Home = lazy(() => import('../pages/home/Home'));
const Services = lazy(() => import('../pages/services/Services'));
const PersonalStylist = lazy(() => import('../pages/personal/Personal'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const ToursPage = lazy(() => import('../pages/ToursPage'));
const SingleTour = lazy(() => import('../pages/singleTour/SingleTour'));
const GiftCard = lazy(() => import('../pages/giftCard/GiftCard'));
const AppointmentForm= lazy(() => import('../appointmentForm/AppointmentForm'));
const Socials = lazy(() => import ('../socials/Socials'))
const ScrollButton = lazy(() => import('../scrollButton/ScrollButton'));
const NewsLetterModal = lazy(() => import('./../newsLetterModal/NewsLetterModal'));
const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
        <AppHeader/>
        </div>
        <Socials/>
          <div className='main-wrapper'>
            <Suspense fallback={<Spinner/>}>
              <Routes>
                  <Route end path="/" element={<Home/>} />
                  <Route end path="/services" element={<Services/>} />
                  <Route end path="/personal-stylist" element={<PersonalStylist/>} />
                  <Route end path="/tours" element={<ToursPage/>}/> 
                  <Route end path="/tours/:id" element={<SinglePage Component={SingleTour} dataType='tour'/>}/>
                  <Route end path="/gift-card" element={<GiftCard/>} />
                  <Route end path="/appointments:id" element={<SinglePage Component={AppointmentForm} dataType='appointment'/>} />
                  <Route path="*" element={<Page404/>}/>
                </Routes>
            </Suspense>
          </div>
          <ScrollButton/>
          <NewsLetterModal/>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
