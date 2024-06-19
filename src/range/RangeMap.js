import { useEffect } from "react"
import RangeFour from "./RangeFour"
import RangeOne from "./RangeOne"
import RangeThree from "./RangeThree"
import RangeTwo from "./RangeTwo"
import AOS from 'aos'
import 'aos/dist/aos.css'
const RangeMap = () =>{

    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="gregre">
            <div className="grewhi">
                <div className="green" data-aos="fade-up">
                    <p className="whi"> Minutes to Book</p> 
                    <h1 className="whi"> <RangeOne /></h1>
                </div> 
                <div className="white" data-aos="fade-up">
                <p className="whit2"> Shipment Visibility</p>
                <h1 className="whi"> <RangeTwo /> </h1>
                </div> 
            </div> 
        <div className="grewhi">
            <div className="white" data-aos="fade-up">
            <p className="whit"> Value of Goods Shipped</p>
            <h1 className="whi"> <RangeThree /> </h1>
            </div> 
            <div className="green" data-aos="fade-up">
            <p className="whi"> Container Speed</p>
            <h1 className="whi"> <RangeFour /> </h1>
            </div>        
            </div>    
        </div>
    )
}
export default RangeMap