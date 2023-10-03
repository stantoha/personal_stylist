import { useState } from "react";
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import { Helmet } from "react-helmet";
import Boxes from "../boxes/Boxes";
import Plane from "./tours/plane/Plane";
import ToursList from './tours/toursList/ToursList';

import { Container } from 'react-bootstrap';

const ToursPage = () => {
    const [selectedTour, setTour] = useState(null);
    const onTourSelected = (id) => {
        setTour(id);
    }
    Boxes('box')
    return (
        <>
            <Helmet>
                <title>Тури</title>
                <meta
                    name="description"
                    content="personal stylist"
                    />
            </Helmet>
            <div className="page tours">
                
                <h6 className="page-title" >Тури</h6>
                <hr />
                
                <div className="box section-title">
                    Подорожі та мода - моє суцільне натхнення, те без чого я не уявляю свого життя!
                </div>
                
                <div className="tours__content">
                    <h4 className="box box-title">Мої тури: </h4>
                    
                    <div className="box-divider"></div>

                    <Plane/>

                    <ErrorBoundary>
                        <ToursList onTourSelected={onTourSelected}/>
                    </ErrorBoundary>

                </div>
                    
            </div>
        </>
    )
}

export default ToursPage;