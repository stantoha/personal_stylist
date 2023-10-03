import GoogleMapReact from 'google-map-react';

const TourMap = (arr) => {

    const origin = arr[0];
    const destination = arr[1];
const renderMarkers = (map, maps) => {
const directionsService = new maps.DirectionsService();
const directionsRenderer = new maps.DirectionsRenderer();

directionsRenderer.setMap(map);

if (origin && destination) {
  const request = {
    origin,
    destination,
    travelMode: 'DRIVING',
  };

  directionsService.route(request, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
    } else {
      console.error('Error rendering directions:', status);
    }
  });
}
};

return (
<div className='mx-auto' style={{ height: '500px', width: 'auto' }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyA_ImcnRh7GGz07QGNVkzb6QWIc-S2LFP8' }} 
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }} 
    defaultZoom={10}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
  />
</div>
);
};

export default TourMap;