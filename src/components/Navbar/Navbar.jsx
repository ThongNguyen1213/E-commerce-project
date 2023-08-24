import React, { useState } from 'react';
import styles from './styles.css';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/items/men" className="btn-link">MENSWEAR</Link>
        <Link to="/items/women" className="btn-link">WOMENSWEAR</Link>
        <Link to="/items/none" className="btn-link">EVERYTHING ELSE</Link>
        <button className="btn">SALE</button>
        <button className="btn">SEARCH</button>
      </div>
      <Link to="/" className="title"><h1>NanoFashion</h1></Link>
      <div className='right-nav'>
        {!authenticate ? <Link to="/login" className="btn">LOGIN</Link> : <Link to="/login" className="btn">ACCOUNT</Link>  }
        <button className="btn">WISHLISTS</button>
        <button className="btn">SHOPPING BAG</button>
      </div>
    </div>
    
  )
}

export default Navbar