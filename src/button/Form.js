import { useState, useEffect } from "react"
import Select from "../Select"
import Cosco from "./Cosco"
import Cmacmg from "./Cmacmg"
import Maresk from "./Maresk"
import Zim from "./Zim"
import One from "./One"
import Oocl from "./Oocl"
import Msc from "./Msc"
import Pil from "./Pil"
import Esl from "./Esl"
const Form = () =>{

    const [toggle, setToggle] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const handleToggle = (id) => {
        setToggle(id)
    }
    useEffect(()=>{
    
        setIsLoading(true)
        setTimeout(() =>{
        
        setIsLoading(false)
        }, 6000)
    
    }, [])
    return (
    <div className="form">
        <h1 className="ha"> </h1>
    <section className="">  
    <div className="seams">
        <ul className="ocean seperate">
            <Select />
        <div className="scroll">
            <button onClick={() => handleToggle(1)} className={toggle === 1 ? "selected sele" : 'button'}>
                Cosco
            </button >
            <button onClick={() => handleToggle(2)} className={toggle === 2 ? "selected" : 'button'}>
                Cmacmg
            </button >
            <button onClick={() => handleToggle(3)} className={toggle === 3 ? "selected" : 'button'}>
                Maresk
            </button >
            <button onClick={() => handleToggle(4)} className={toggle === 4 ? "selected" : 'button'}>
                Pil
            </button >
            <button onClick={() => handleToggle(5)} className={toggle === 5 ? "selected" : 'button'}>
                Zim
            </button >
            <button onClick={() => handleToggle(6)} className={toggle === 6 ? "selected" : 'button'}>
                Oocl
            </button >
            <button onClick={() => handleToggle(7)} className={toggle === 7 ? "selected" : 'button'}>
                Msc
            </button >
            <button onClick={() => handleToggle(8)} className={toggle === 8 ? "selected" : 'button'}>
                One
            </button >
            <button onClick={() => handleToggle(9)} className={toggle === 9 ? "selected" : 'button'}>
                Esl
            </button >
        </div>
        </ul>
        <hr />
        {isLoading ? <p className='loading'></p> : 
        <div className={toggle === 1 ? "show-content" : "content"}>
             <Cosco />
        </div>
        }
        <div className={toggle === 2 ? "show-content" : "content"}>
            <Cmacmg />
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
            <Maresk />
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
            <Pil />
        </div>
        <div className={toggle === 5 ? "show-content" : "content"}>
            <Zim />
        </div>
        <div className={toggle === 6 ? "show-content" : "content"}>
            <Oocl />
        </div>
        <div className={toggle === 7 ? "show-content" : "content"}>
            <Msc />
        </div>
        <div className={toggle === 8 ? "show-content" : "content"}>
            <One />
        </div>
        <div className={toggle === 9 ? "show-content" : "content"}>
            <Esl />
        </div>
        </div>
    </section>
    </div>
    )
}
export default Form