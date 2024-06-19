import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { useState } from "react"
const Main = () =>{

    const [value, setValue] = useState(false)

    return(
    <div className="div22">
        <div className="divblack divbla" style={{width: '160px', translate:'5px', marginTop:'-90px'}}>
            <div>
            <div style={{fontSize:'10px'}} className="div1">
                <p>Marketing</p>
                <p>This Week</p>
            </div>
            <div>
                <div className="div4">
                <p className="div2"> </p>
                <p className="div3">Aquisition</p>
                </div>
                <div className="div4">
                <p className="div5"> </p>
                <p className="div7">Purchase</p>
                </div>
                <div className="div4">
                <p className="div6"> </p>
                <p className="div8">Retention</p>
                </div>
            </div>
            <div className="div24">
                <div className="div9"></div>
                <div className="div10"> </div>
                <div className="div11"> 
                <h1 className="count">
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={100} duration={2} delay={0} />}
        </ScrollTrigger>%
        </h1>
        </div>
            </div>
            </div>
        </div>
            <div className="div23">
            <div className="div17">
                <p className="div18"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='icon'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg></p>
                <div className="div12">
                    <p>All Product</p>
                    <p className="div14">Active</p>
                </div>
                <br/>
                <div className="div13">
                    <p>45</p>
                    <div className="div15">
                    <p className="div15">32 <p className="div16">+24</p></p>
                    
                    </div>
                </div>
            </div>
            <div className="div20">
                <div className="div19">
                <p className=""> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</p>
                <p> This Weeeks</p>
                </div>
                <div className="div12">
                    <p>Abandoned Cart</p>
                    <p className="div14">Customers</p>
                </div>
                <br/>
                <div className="div13">
                    <div className="div15b">
                    <p className="div15">20% <p className="div16">+0.00%</p></p>
                    </div>
                    <p className="div15a">30</p>
                </div>
            </div>
            </div>
           
        </div>
    )
}
export default Main