//import'./Style.css'
import {Link} from 'react-router-dom'
export default function Header(){
 return(
 <div className=" ">
 <h3 class="bg-gray-300 p-1 text-xl  text-right"><h3 class="text-left "> FlipKart</h3>
 <Link to="/">Home</Link>
 <Link to="/Login">Login</Link>
  <Link to="/Register">Register</Link>
 </h3>
 </div>
 )
}