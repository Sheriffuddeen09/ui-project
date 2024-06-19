import One from './images/Airp.svg'
import Two from './images/Truck.svg'
import Three from './images/Car.svg'
const Freight = () =>{

    return (
    <div className="trust">
        <p className="h001">
            Trusted <span className="h00"> freight solutions </span> for 
        </p>
        <p className="h002">
            your supply chain
        </p>
        <p className="h003">
            Let us handle the details and you can focus on
        </p>
        <p className="h004">
            growing your business.
        </p> 
<div className="h005">
    <div>
            <div className="h006" data-aos="fade-up">
                <span>
                    <img src={Two} alt="OnePor" width="350px" height="230px" className="imag" />
                </span>
                <p className="h007">
                    Ocean Freight Service
                </p>
                <p className="h008">
                    Cost-effective shipping option for large and <br/>
                    bulky goods that can withstand longer transit <br/>
                     times.
                </p>
                <p className="h009">
                    Ship across the ocean today &nbsp;
                <span className='rote'>^</span>
                </p>
            </div>
            <div className="h010" data-aos="fade-up">
                <p className="h011">
                    Start today
                </p>
                <p className="h012">
                   Take your steps and book your shipment
                   <br/>
                   today with our top-notch freight 
                   <br/>
                   forwarding service - your gateway to seamless global shipment! 
                </p>
            </div>
    </div>
    <div>
        <div className="h013" data-aos="fade-up">
            <span>
                <img src={Three} alt="OnePor" width="350px" height="215px" className="imag" />
            </span>
            <p className="h007">
                Air Freight Service
            </p>
            <p className="h008">
                Fast and efficient shipping option for time-
                <br/>
                sensitive and high-value goods that need to 
                <br/>
                be delivered quickly.
            </p>
            <p className="h009">
                Take off with Air Freight!&nbsp;
                <span className='rote'>^</span>
            </p>
        </div>
        <div className="h014" data-aos="fade-up">
            <span>
                <img src={One} alt="" width="350px" height="250px" className="imag" />
            </span>
            <p className="h007">
                Haulage Service
            </p>
            <p className="h008">
                Flexible shipping option for smaller 
                <br/>
                shipments, LTL cargo, and time-sensitive <br/>
                 goods that require door-to-door delivery.
            </p>
            <p className="h009">
                Hassle-Free Haulage Solutions!&nbsp;
                <span className='rote'>^</span>
            </p>
        </div>
    </div>
</div>
</div>
    )
}
export default Freight
