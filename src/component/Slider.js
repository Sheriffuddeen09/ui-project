import Ola from './images/ola.svg'
import Dan from './images/dan.svg'
import Tena from './images/tena.svg'
import Rec from './images/rec.svg'
import  Afe from './images/afe.svg'
const Slider = () =>{


    return(
        <div className="h049">
            <p className="h051">Oneport365 has supported these top companies</p>
            <div className="h050">
            <img src={Ola} width={100} height={50} className='sli' alt="OLAM" />
            <img src={Dan} width={100} height={50} className='sli' alt="DANGOTE" />
            <img src={Tena} width={100} height={50} className='sli' alt="Tenatiza" />
            <img src={Rec} width={100} height={50} className='sli' alt="recyclan" />
            <img src={Afe}  width={100} height={50} className='sli' alt="AFEX" />
            </div>
        </div>

    )
}
export default Slider