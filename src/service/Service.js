import { useHttp } from '../hook/http.hook';

const useService = () => {

    const {request, clearError, process, setProcess} = useHttp();
   const _apiBase='http://localhost:3030/';
   const _apiServices='services';
   const _apiReviews='reviews';
   const _apiTours='tours';
   const _baseOffset=3;

   const getAllTours = async (offset = 0) => {
    const res = await request(
        `${_apiBase}${_apiTours}?orderBy=issueNumber&limit=8&offset=${offset}`
    );
    return res.map(_transformTours);
    };

    const getTour = async (id) => {
        const res = await request(`${_apiBase}${_apiTours}/${id}`);
        return _transformTours(res);
    };

    const getAllServices = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}${_apiServices}?limit=6&offset=${offset}`);
        
        return res.map(_transformServices);
    }

    const getService = async (id) => {
        const res = await request(`${_apiBase}${_apiServices}/${id}`);
        return _transformServices(res);
    }
    const getServiceByName = async (name) => {
        const res = await request(`${_apiBase}${_apiServices}?name=${name}`);
        return res.map(_transformServices);
    }
    const getReviewByName = async (name) => {
        const res = await request(`${_apiBase}${_apiReviews}?name=${name}`);
        return res.map(_transformReviews);
    }


    const getAllReviews = async (offset = 0) => {
        const res = await request(
            `${_apiBase}${_apiReviews}?orderBy=issueNumber&limit=8&offset=${offset}`
        );
        
        return res.map(_transformReviews);
    };

    const getReview = async (id) => {
        const res = await request(`${_apiBase}${_apiReviews}/${id}`);
        return _transformReviews(res);
    };
const _transformServices = (service) => {
    return {
        id: service.id,
        service: service.service,
        name: service.name,
        img: service.img,
        descr: service.descr,
        serviceDetails: service.serviceDetails,
        serviceSteps: service.serviceSteps,
        duration: service.duration,
        online: service.online,
        price: service.price,
    }
}
const _transformReviews = (tour) => {
    return {
        id: tour.id,
        tourNum: tour.tourNum,
        start: tour.start,
        name: tour.name,
        dates:tour.dates,
        seats:tour.seats,
        directionCountry: tour.directionCountry,
        duration: tour.duration,
        route: tour.route,
        reviews: tour.reviews,
        countries: tour.countries,
        cities: tour.cities,
        km: tour.km,
        description: tour.description,
        program: tour.program,
        imgs: tour.imgs, 
        price: tour.price,  
    }
};
const _transformTours = (tour) => {
    return {
        id: tour.id,
        tourNum: tour.tourNum,
        start: tour.start,
        name: tour.name,
        dates:tour.dates,
        seats:tour.seats,
        directionCountry: tour.directionCountry,
        duration: tour.duration,
        route: tour.route,
        reviews: tour.reviews,
        countries: tour.countries,
        cities: tour.cities,
        km: tour.km,
        descriptionBlocks: tour.descriptionBlocks,
        program: tour.program,
        imgs: tour.imgs, 
        price: tour.price,  
    }
};

return {
        clearError,
        process,
        setProcess, 
        getAllServices, 
        getService,
        getServiceByName,
        getReviewByName, 
        getAllReviews,
        getReview,
        getAllTours,
        getTour
       
    }
}

export default useService;