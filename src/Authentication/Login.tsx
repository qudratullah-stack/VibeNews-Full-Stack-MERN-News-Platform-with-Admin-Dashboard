import './Auth.css'
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { useContext  , useState , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const emailref = useRef<HTMLInputElement>(null)
  const [loginPassword, setLoginPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  
     const { darkMode,alert , setAlert, setSuccessMessage, successMessage} = useContext(UserContext)!;
const login  = async ()=> {
  try{
  const res =   await axios.post('https://vibenews-backend-production.up.railway.app/registration/login',{
     email: loginEmail, 
     password: loginPassword
    })
    const token = res.data.token
    localStorage.setItem('usertoken', token)
    setAlert(true)
    setSuccessMessage('login successful. Welcome back!')
    navigate('/')
  }catch(err){
    setAlert(true)
    setSuccessMessage('Invalid emial or password')
   
  }
}
const handleform = (e: React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
    const Regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if( !Regexp.test(loginEmail) ){
  if(emailref.current){
  emailref.current.classList.add('input-error')
  emailref.current.focus()
  return
  }
}
if(emailref.current)  emailref.current.classList.remove('input-error')
   login()
}
  return (
  <>
   {alert && <div className="alertmessage">{successMessage}</div>}
  <form onSubmit={handleform}>
  <div className={darkMode?'bgnone':'homepageparrent'}>
     <div className="bgcontroll">
  <div className={`authContainer ${darkMode?'lightContainer':''}`}>
   <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setLoginEmail(e.target.value)} ref={emailref}/>
   </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password"  id="exampleInputPassword1" onChange={e => setLoginPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</div>
</div>
</form>
  </>
  )
}

export default Login
