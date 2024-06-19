import { useEffect } from "react"
import Start from "./Start"
import Maps from "./Maps"
import { faqs } from "./Faq"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Accordion = () =>{

    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])

    
    const content = (
        faqs.map((faq) =>{
            return <Maps key={faq.id} faq={faq} />
        })
    )
        return (
    <div className="h0217a">
    <div className="shii12" data-aos="flip-right">
            <div>
            <h2 className='h056a'> How Does It Work </h2>
            <span className='hra1'> </span>
           {content}
            </div>
    
    </div>
    <div data-aos="zoom-in">
        <Start />
    </div>
    </div>
        )
    }
    export default Accordion