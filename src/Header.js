import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Logo from './images/port.png'
const Header = ({search, setSearch}) =>{
const [country, setCountry] = useState('')
const homepage = useLocation().pathname


    return(

        <nav>
          <div className="flexnav">
            <span className="img">
              <p className="loss"> SheriffDev </p>
              <form>
                <input type='text' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='search'
                className='inputsearch'
                />
            </form>
            <button className='button-bar'> 
            <div className='menu-media'> </div>
          </button>
            </span>
            <span className="navflex navinline">
            <span>
            <img src={Logo} alt="Logo" className="logo"/>
            </span>
            <ul className="uls">
                <li  className={`'background' ${homepage === '/home' ? 'primary' : 'background'}`}><Link  to='/home' className='butto '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='iconh'  style={{translate:'-12px'}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
<p className="toolh"> Home </p></Link></li>
                <li className={`'background' ${homepage === '/mes' ? 'primary' : 'background'}`}><Link to='/mes' className="butto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="iconb">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg> 
<p className="tool too"> Message </p></Link>
</li>
                <li className={`'background' ${homepage === '/post' ? 'primary' : 'background'}`}><Link to='/post' className="butto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='iconc'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
<p className="tool"> Blog </p></Link>
</li>
<li className={`'background' ${homepage === '/video' ? 'primary' : 'background'}`}><Link to='/video' className="butto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='icone'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg><p className="tool"> Video </p></Link></li>
<li className={`'background' ${homepage === '/dashboard' ? 'primary' : 'background'}`}><Link to='/dashboard' className="butto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='icond'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
<p className="tool2"> DashBoard </p></Link>
</li>
            </ul>
            <section>
            <select value={country}
            onChange={(e) => setCountry(e.target.value)} className="sece mosece">
            <option value="Fn">
            <img src={Logo} alt="Logo" width={50} height={50}/>
                Nigeria
            </option>
            <option value="Fs">
            <img src={Logo} alt="Logo" width={50} height={50}/>
                Ghana
            </option>
            <option value="Fa">
            <img src={Logo} alt="Logo" width={50} height={50}/>
                Algeria
            </option>
            </select>
        </section>
        </span>
        </div>
              </nav>
    )
}
export default Header



