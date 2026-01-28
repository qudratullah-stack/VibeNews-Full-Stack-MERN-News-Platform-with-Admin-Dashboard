
import './Auth.css'
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { useContext , useState , useRef} from 'react';
function Signup() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const emailref = useRef<HTMLInputElement>(null)
 

  const { darkMode, alert , setAlert, successMessage, setSuccessMessage} = useContext(UserContext)!;
const signup = async() =>{
  try{
    await axios.post('https://vibenews-backend-production.up.railway.app/registration/signup',{
        name, email, password
    }) 
    setAlert(true)
    setSuccessMessage('Registration Completed successfully')
  }catch(err){
    setAlert(true)
    setSuccessMessage("An unexpected error occurred. Please try again later")
  }
}
const handleform = (e: React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
    const Regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if( !Regexp.test(email) ){
  if(emailref.current){
  emailref.current.classList.add('input-error')
  emailref.current.focus()
  return
  }
}
if(emailref.current)  emailref.current.classList.remove('input-error')
   signup()
}
  return (
   <>
   {alert && <div className="alertmessage">{successMessage}</div>}
   <div className={darkMode?'bgnone':'homepageparrent'}>
    <div className="bgcontroll">
   <div className={`authContainer ${darkMode?'lightContainer':''}`}>
   <form onSubmit={handleform}>
     <div className="form-group">
    <label htmlFor="exampleInputName">Name</label><br />
    <input type="text"  id="exampleInputName" aria-describedby="emailHelp" minLength={3} onChange={e => setName(e.target.value)}/>
   </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label><br />
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value) } ref={emailref}/>
   </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label><br />
    <input type="password"  id="exampleInputPassword1" minLength={8} onChange={e => setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
   </>
  )
}

export default Signup
