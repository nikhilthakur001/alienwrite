import React from 'react';
import './header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerTitle : 'What I learned this year!',
            headerDescription : '2018 has been a major change in my life. Here are few of the highlights which I learned during this year. I hope this help you too.'
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header-image-wrapper'>
                    <a href="#" className='header-link' title={this.state.headerTitle}>
                        <div className='header-image'>
                            <div className='header-content'>
                                <div className='header-title-wrapper'>
                                    <h2 className='header-title'>{this.state.headerTitle}</h2>
                                </div>
                                <div className='header-description-wrapper'>
                                    <h4 className='header-description'>{this.state.headerDescription}</h4>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;