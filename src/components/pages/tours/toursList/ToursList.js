import {useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types'
import { Card} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import useService from '../../../../service/Service';
import Spinner from '../../../spinner/Spinner';
import ErrorMessage from '../../../../errorMessage/ErrorMessage';

import './toursList.scss';
const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}
const ToursList = (props) => {
    const [toursList, setToursList] = useState([]);
    const [newItemLoading, setnewItemLoading] = useState(false);
    const {getAllTours, process, setProcess} = useService();

    useEffect(() => {
        onRequest(true)
        // eslint-disable-next-line
    }, [])

    const onRequest = (initial) => {
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
        getAllTours()
            .then(onToursListLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onToursListLoaded = async (newToursList) => {
        setToursList([...toursList, ...newToursList]);
        setnewItemLoading(false);
    }

    const itemRefs= useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('tours__item_selected'));
        itemRefs.current[id].classList.add('tours__item_selected');
        itemRefs.current[id].focus();
    }
    function renderItems (arr) {
        const items = arr.map((item, i) => {
            return (
                <li key={item.id}
                    className="tours__item" 
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    onClick={() => {
                        props.onTourSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onTourSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                    >
                    <Link className='tour__link' to={`/tours/${item.id}`}>
                    <Card className='tours__item-card h-100 rounded'>
                            
                            <Card.Header className='w-100'>
                            <Card.Title className="tours__item-name">
                                {item.name}
                            </Card.Title>
                            </Card.Header>
                                
                            <Card.Body className='tours__item-body'>
                                <Card.Img src={item.imgs} alt={item.title} className="tours__item-img"/>
                                <Card.Text className="tours__item-descr">{item.description}</Card.Text>
                            </Card.Body>
                                
                            <Card.Footer className="tours__item-details">
                                <div className="tours__item-days">{item.duration} днів</div>
                                <div className="tours__item-price">{item.price} &#8364;</div>
                            </Card.Footer>
                    </Card>
                    </Link>
                </li>
            )
        })

        return (
                <ul className="tours__flex">
                    {items}
                </ul>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(toursList), newItemLoading);
        // eslint-disable-next-line
    },[process]);

    return (
        <div className="tours__list">
        {elements}
        </div>
        
    )
}

ToursList.propTypes = {
    onTourSelected: PropTypes.func.isRequired
}

export default ToursList;