import logo from './images/image-3.jpeg'
const Logo = () =>{

    return (
        
        <div className='side'>
        <img className='image' alt='logo' width={40} height={40} src={logo}/>
        <h2 className='h2'> ALEX JOHNSON </h2>
        <p className='p'> alex.johnson@gmail.com </p>
        </div>
    )
}
export default Logo