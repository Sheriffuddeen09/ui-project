import logo from './images/image-3.jpeg'
import logos from './images/image-1.jpeg'
import loge from './images/image-2.jpeg'
import loga from './images/gg.jpg'
import curve from './images/Screenshot 2024-07-13 002815.png'
const Footer = () =>{

    return (
        
        <div>
            <p className='p1'> ACTIVE USERS </p>
        <img className='imagefooter' alt='logo' width={25} height={25} src={logo}/>
        <img className='imagefooter' alt='logo' width={25} height={25} src={loge}/>
        <img className='imagefooter' alt='logo' width={25} height={25} src={logos}/>
        <img className='imagefooter' alt='logo' width={25} height={25} src={loga}/>
        <div className='plus'>+70</div>
    
        <div className='dotb'>
            <img src={curve} alt='logo' width={130} height={60} />
        </div>

        </div>
    )
}
export default Footer