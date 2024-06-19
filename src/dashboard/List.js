import ProgressBar from "./ProgressBar"
import ListItem from "./ListItem"
import Order from "./Order"
import Main from "./Main"
import { items } from "./Map"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
const List = () =>{

    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])

   return (
<div className='div30'>
<div>
       <ul className="mainer" data-aos="zoom-out">
        {
            items.map((item) =>(
                <ListItem key={item.id} item={item}/>
            ))
        }
       </ul>
    <div className="join">
    <div className="col">
       <div>
        <Main />
       </div>
       <div className="pro">
       <ProgressBar/>
       </div>
    </div>
        <div className='div31'>
        <Order/>
         </div>
    </div>
    </div>
</div>
    )
}
export default List