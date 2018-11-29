import React from 'react';
import './navbar.css';

const routeBaseUrl = 'http://localhost:3000';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            brandName : 'AlienWrite',
            menuItem : [
                {
                    'name' : 'Home',
                    'link' : routeBaseUrl
                },
                {
                    'name' : 'Coffee with an Alien',
                    'link' : '#'
                },
                {
                    'name' : 'Login',
                    'link' : '#'
                }
            ]
        }
    }

    render() {
        return (
            <div className='navbar-container'>
                <nav className='navbar'>
                    <div className='brand-name-wrapper'>
                        <p className='brand-name'>{this.state.brandName}</p>
                    </div>
                    <div className='navbar-menu-wrapper'>
                        <ul className='navbar-menu'>
                            {
                                this.state.menuItem.map((value,index) => {
                                    return (
                                        <a 
                                            href={value.link}
                                            key={index}
                                            className='menu-item-link'
                                        >
                                            <li className='menu-item'>{value.name}</li>
                                        </a>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className='navbar-bitmoji-wrapper'>
                        <div className='navbar-bitmoji'></div>
                    </div>
                </nav>
                <div className='navbar-top-body-margin'></div>
            </div>
        )
    }
}

export default Navbar;