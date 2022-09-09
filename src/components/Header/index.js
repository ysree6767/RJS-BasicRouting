// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="item-container">
      <li className="nav-item">
        {' '}
        <Link to="/">Home</Link>{' '}
      </li>
      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
        {' '}
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
