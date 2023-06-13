// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <nav className="header-container">
    <Link to="/">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="icon-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="icon" />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="popup-container">
          <button
            className="icon-button button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="icon" />
          </button>
          <ul className="links-container">
            <Link to="/" className="link-item">
              <li className="list-item">
                <AiFillHome className="icon" />
                <p className="text-link">Home</p>
              </li>
            </Link>
            <Link to="/about" className="link-item">
              <li className="list-item">
                <BsInfoCircleFill className="icon" />
                <p className="text-link">About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)
export default Header
