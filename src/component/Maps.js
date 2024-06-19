import { useState } from "react"
const Maps = ({faq}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
return(
    <div className="accordion" onClick={toggleSubmit}>
            <div className="items">
                <span className="text2">
                <p className="number">
                    {faq.id}
                </p>
                <p className="text1">
                    {faq.title}
                </p>
                </span>
                <span>
                <p className={`rotate ${isVisible ? 'rotate1' : null}`}>
                    ^
                </p>
            </span>
            </div>
            <div className={`hidden-box ${isVisible ? 'active' : null}`}>
            <p className="tes"> {faq.body} </p>
            </div>
        
        </div>
)
}
export default Maps