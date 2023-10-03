import img from './error.gif';
const ErrorMessage = () =>{
    return(
        <img style={{display:'block',width:'300px',height:'300px',
        objectFit:'cover',margin: '0 auto',padding:'10px',borderRadius:'15px/15px'
        }} src={img} alt='Error'/>
    )
}

export default ErrorMessage;