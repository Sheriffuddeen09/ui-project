import logo from './images/Screenshot 2024-07-13 040616.png'
const Jfk = () =>{

    return (
        <div className="bombackground">
        <div className="inline">
            <p className="p23">FROM</p>
            <p className="p23">TO</p>
        </div>
        <div className="inlines">
            <p className="p24">JFK</p>
            <p className="p23">NON STOP</p>
            <p className="p24">BOM</p>
        </div>
        <img src={logo} width={210} 
        height={120}alt='logo' className='bomimage'/>
        <div className='inlins'>
        <p className="p25">NON STOP</p>
        <p className="p23">ONE STOP</p>
        <p className="p23">MORE STOP</p>
        </div>
        <p className='p26'>PRICE</p>
        <div className='hr'></div>
        <div className='dott'></div>
        <div className='doot'></div>
        <div className='inlins'>
            <p className='p27'>$500</p>
        <div className='do'></div>
            <p className='p28'>$2500</p>
        <div className='dos'></div>
        </div>
    </div>
    )
}

export default Jfk