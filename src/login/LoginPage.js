import {useEffect, useRef, useState } from "react"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './login.css'
//import axios from "./api/apiAxios"
//import useAuth from "../context/useAuth"
//import useInput from "../context/useInput"
//import Toggle from "../context/Toggle"
//const REGISTER = '/auth'

const LoginPage = () =>{
    const userRef = useRef()
    const navigate = useNavigate()
   // const errRef = useRef()
    //const [user, resetUser, attribUser] = useInput('user','')
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [success, setSuccess] = useState('')
    const [errMsg] = useState('')
    //const [errMsg, setErrMsg] = useState('')
   // const [check, toggleChecked] = Toggle('persist', false)
    //const {setAuth} = useAuth //, persist, setPersist

    //const location = useLocation()
    //const navigate = useNavigate()
    //const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        userRef.current.focus()

    }, [])

    /*const toggleCheck = () =>{
        setPersist(prev => !prev)
    }
    useEffect(() =>{
        localStorage.setItem('persit', (persist))
    }, [persist])
*/
   const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(user, pwd)
    setUser('')
    //resetUser()
    setPwd('')
    setSuccess(true)
    navigate('/home')
    //
    
    /*try{
        const response = await axios.post(REGISTER,
            JSON.stringify({user, pwd}),
           { headers:{ 'Content-Type':'application/json'}, 
           withCredential: true
        }
       
        )
        
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data?.accessToken
        const roles =  response?.data?.roles
        setAuth({user, pwd, roles, accessToken}) // remove the roles and pwd because we using jwt-decode 
        //setUser('')
        resetUser('')
        setPwd('')
        navigate(from, {replace: true})
    }
    catch(err){
        if(!err?.response){
            setErrMsg('No server Response')
        }
        else if(err.response?.status === 401){
            setErrMsg('Unauthorised')
        }
        else if(err.response?.status === 400){
            setErrMsg('Missing Username or Password')
        }
        else{
            setErrMsg('Login failed')
        }
        errRef.current.focus()
    }*/
   }

    return(
        <>
        {
                success ?
                <section className="div">
                    <h1>
                        you are logged in !
                    </h1>
                    <br />
                    <p> 
                        <Link to="/" className="link">Go to Home</Link>
                    </p>
                </section>
                :
            <div className="dive">
             <p className={errMsg ? 'errMsg' : 'hide'}>
                {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                <div className="usern">
                    <p>
                        username:
                    </p>
                    <br />
                    <input 
                    className="inputs"
                    type="text"
                    required
                    id="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                   // {...attribUser}
                    ref={userRef}
                    autoComplete="off"
                    />
                </div>
                    <div className="usern">
                    <p>
                        password:
                    </p>
                    <br />
                    <input 
                    className="inputs"
                    type="password"
                    required
                    id="password"
                    checked={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    />
                    </div>
                </div>
                <button type="submit" className="button">
                Sign in
                </button>
            </form>

            <p className="linksign"> Need an Account ?
            <br />
                <span>
                    <Link to="/register" className="linksign">Sign Up</Link>
                </span>
            </p>
           
        </div>

            }
        </>
        
    )
}
export default LoginPage