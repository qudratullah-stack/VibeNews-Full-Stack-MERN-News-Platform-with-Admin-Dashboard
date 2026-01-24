import './Auth.css'
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
function Login() {
     const { darkMode} = useContext(UserContext)!;
  return (
  <>
 
  <div className={darkMode?'bgnone':'homepageparrent'}>
     <div className="bgcontroll">
  <div className={`authContainer ${darkMode?'lightContainer':''}`}>
   <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
  </>
  )
}

export default Login
