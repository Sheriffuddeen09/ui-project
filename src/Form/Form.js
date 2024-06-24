import FormInput from './FormInput'
import useContent from './hook/useFormContext'
import { Link } from 'react-router-dom'

const Form = () =>{

    const { data, setPage,page,
         canSubmit, nextHide, disableNext, prevHide, 
         disablePrev, submitHide, title, setData
        } = useContent()

    const handleSumbit = (e) =>{
        e.preventDefault()
        console.log(JSON.stringify(data))
        setData('')
    }

    const nextButton = () => setPage(prev => prev + 1)
    const prevButton = () => setPage(prev => prev - 1)

    return (
        
        <div className='section'>
         <form onSubmit={handleSumbit}>
            <p className='title'> {title[page]} </p>
            <div className='but'> 
                <button type='button' onClick={prevButton} disabled={disablePrev} className={`button ${prevHide}`}>PrevButton</button>
                <button type='button' onClick={nextButton} disabled={disableNext} className={`button ${nextHide}`}>NextButton</button>
               <Link to={'/home'}> <button type='submit' disabled={!canSubmit} className={`button ${submitHide}`}>Submit</button> </Link>
            </div>
                <FormInput />
            </form>
        </div>
    )
}
export default Form