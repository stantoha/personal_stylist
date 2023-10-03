import {useEffect } from 'react';

// import plane from './plane.png';

import './plane.scss';

function Plane(){
    useEffect(() => {
            document.querySelector('.plane').classList.add('plane__move');
    })
    return(
        <div className="position-absolute mx-auto" style={{width:'200%',height:'100vh',left:'-100%'}}>
            <img src='https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Airplanes-PNG-Clipart/Plane_Transparent_Clipart.png?m=1507172104' alt="plane" className='plane' />
        </div>
    )
}

export default Plane;