import Face from './images/face.png'
import Twitter from './images/twwit.png'
import whats from './images/whats.jpeg'
import Port from './images/ports.png'

const Footers = () =>{

return (
    <div className="div019">
     <div className="div020">
        <div className="div018">
        <h6 className="div021">Get notified on any
            <br/>
            updates
        </h6>
        <p className="div022">
            Stay up to date on announcements, offer and  
            <br/>
            mew product
        </p>
        </div>
        <div className="div025">
        <span>
            <input type="text" placeholder="Enter your email address" className="div023" />
        </span>
        <button className="div024">subscribe</button>
        </div>
    </div>
    <span className="div018i"></span>
        <div className="div016">
            <div>
                <span><img src={Port} alt="" height={30} width={30}/></span>
                <p>eCommerce</p>
                <p>High Value Goods</p>
                <p>Global Brands</p>
                <p>Nonprofits</p>
            </div>
    
        <div>
            <h6>Products</h6>
            <p>Ocean Freiht</p>
            <p>Air Freight</p>
            <p>Land Logistics</p>
            <p>Custom</p>
        </div>
      <div>  <h6>Legal</h6>
            <p>Privacy-End users</p>
            <p>Developers policy</p>
            <p>Terms</p>
            <p>Cookies</p>
            <p>Security</p>
        </div>
        <div>
            <h6>Help & Resources</h6>
            <p>Careers</p>
            <p>FAQS</p>
            <p>Blog</p>
            <p>Videos and Webinars</p>
            <p>Help Center</p>
            <p>API Reference</p>
        </div>
     </div>
    <div className="div012i">
    <div className='wrapper'>
            <p className='static'>2024 Design By:</p>
            <ul className='dynamic'>
            <ol><main>Odukoya Sheriffuddeen Olawale</main></ol>
            </ul>
    </div>
<span className='spa'>
    <img src={Face} alt="facebook" className='imgse' width="25px" height="25px" />
    <img src={Twitter} alt="twitter" className='imgse' width="25px" height="25px" />
    <img src={whats} alt="whats" className='imgse' width="25px" height="25px" />
</span>
</div>
</div>


)
}
export default Footers