
const DarkMode = ({isChecked, handleChecked, istoggle}) =>{

  
     return(
        <div style={{display:'inline-flex'}}>
            <input className="toggle" id='check'
            type="checkbox" onChange={handleChecked}
            checked={isChecked}/>
            <label htmlFor="check" className={`${istoggle ? 'Dark-Mode' : 'Light-Mode'}`}> {istoggle ? 'Dark-Mode' : 'Light-Mode'}</label>
        </div>
    )
}
export default DarkMode