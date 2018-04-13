import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Search from './Search';


const Header = () => {
/*const containerStyle = {
    fontSize: '40px'
}
*/
return (
    //Inline Styles
    <div className="Header">
        <Link to ="/">
        <img src={logo} alt="logo" className="Header-logo"/>
        </Link>
        
        <Search />
    </div>


);

}

export default Header;