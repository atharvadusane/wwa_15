import Navright from './navright'
import Navleft from './navleft'
import { Link as Linktoo } from 'react-router-dom'

const Navbar = ({ openpop_func }) => {
  return (
    <navbar>
      <div className="navbar">
        <div className="nav-dropdown">
          <div class="btn-group mb-3 mr-5">
            <button class="p-0 btn dropdown-toggle menu-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="material-symbols-outlined">
                menu
              </span>
            </button>
            <ul class="dropdown-menu dropdown-list" aria-labelledby="dropdownMenuLink">
              <li><Linktoo to={'/'}>Home</Linktoo></li>
              <li><button onClick={openpop_func}>Upcoming-Event</button></li>
              <li><Linktoo to={'/events'} >Events-page</Linktoo></li>
              <li><Linktoo to={'/team'}>Our TEAM</Linktoo></li>
              <li><Linktoo to={"/login"} >Login</Linktoo></li>
            </ul>
          </div>
        </div>


        <Navleft />
        <Navright openpop_func={openpop_func} />
      </div>
    </navbar>
  )
}

export default Navbar