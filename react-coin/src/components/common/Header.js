import React from 'react';
import './Header.css';
import logo from './logo.png';


const Header = () => {
/*const containerStyle = {
    fontSize: '40px'
}
*/
return (
    //Inline Styles
    <div className="Header">
        <img src={logo} alt="logo" className="Header-logo"/>
    </div>

);

}

export default Header;