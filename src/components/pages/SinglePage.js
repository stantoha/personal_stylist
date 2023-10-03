import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useService from '../../service/Service';
import setContent from '../../utils/setContent';


const SinglePage = ({Component, dataType}) => {
        const {id} = useParams();
        const [data, setData] = useState(null);
        const {getTour,  clearError, process,setProcess} = useService();

        useEffect(() => {
            updateData();
            // eslint-disable-next-line
        }, [id])
      
        const updateData = () => {
            clearError();

            
            switch (dataType) {
                case 'tour':
                    getTour(id).then(onDataLoaded).then(()=> setProcess('confirmed'))
                    break;
                    
                case 'appointment':
                    getTour(id).then(onDataLoaded).then(()=> setProcess('confirmed'))
                    break;
                default:
                    return;
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }

        return (
            <>
                {setContent(process,Component,data)}
            </>
        )
}

export default SinglePage;
