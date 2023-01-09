import { useNavigate, useLocation } from "react-router-dom";
// import svg icon as react component i/o svg path
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'


function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  // check if the link in navbar is the active link 
  // changes the icon color if it is active link 
  const pathMatchRouter = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate('/')}>
            <ExploreIcon 
              fill={pathMatchRouter('/') ? '#2c2c2c' : '#8f8f8f'} 
              width='36px' 
              height='36px' />
            <p className={pathMatchRouter('/') ? 
              'navbarListItemNameActive' : 
              'navbarListItemName'} >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/offers')}>
            <OfferIcon 
              fill={pathMatchRouter('/offers') ? '#2c2c2c' : '#8f8f8f'} 
              width='36px' 
              height='36px' />
            <p className={pathMatchRouter('/offers') ? 
              'navbarListItemNameActive' : 
              'navbarListItemName'}>
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/profile')}>
            <PersonOutlineIcon 
              fill={pathMatchRouter('/profile') ? '#2c2c2c' : '#8f8f8f'} 
              width='36px' 
              height='36px' />
            <p className={pathMatchRouter('/profile') ? 
              'navbarListItemNameActive' : 
              'navbarListItemName'}>
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
