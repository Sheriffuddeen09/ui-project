import Shipment from "./ocean/Shipment"
import ShipType from "./custom/ShipType"
import Track from "./tracking/Track"
import { useState, useEffect } from "react"
import SeamLes from "./SeamLes"
import FreightOrigin from "./freight/FreightOrigin"

const Seamless = () =>{

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
    
return(
<section className="lidiv">  
    <div className="seam">
        <ul className="ocean">
            <li onClick={() => handleToggle(1)} className={toggle === 1 ? "selected1" : 'li'}>
                Ocean Fright
            </li >
            <li onClick={() => handleToggle(2)} className={toggle === 2 ? "selected2" : 'li'}>
                Air Fright
            </li >
            <li onClick={() => handleToggle(3)} className={toggle === 3 ? "selected2" : 'lis'}>
                Haulage Shipment
            </li >
            <li onClick={() => handleToggle(4)} className={toggle === 4 ? "selected2" : 'lis'}>
                Custom Brokerage
            </li >
            <li onClick={() => handleToggle(5)} className={toggle === 5 ? "selected3" : 'lis'}>
                Tracking Product
            </li >
        </ul>
        <hr />
        {isLoading ? <p className='loading'></p> :
        <div className={toggle === 1 ? "show-content" : "content"}>
            <Shipment/>
        </div>
    }
     {isLoading ? <p className=''></p> :
        <div className={toggle === 2 ? "show-content" : "content"}>
        <FreightOrigin/>
        </div>
        }
        {isLoading ? <p className=''></p> :
                <div className={toggle === 3 ? "show-content" : "content"}>
                    <SeamLes/>
                </div>
        }
        {isLoading ? <p className=''></p> :
                <div className={toggle === 4 ? "show-content" : "content"}>
                    <ShipType/>
                </div>
        }
        {isLoading ? <p className=''></p> :
                <div className={toggle === 5 ? "show-content" : "content"}>
                    <Track/>
                </div>
        }
        
        </div>
</section>
    )
}
export default Seamless