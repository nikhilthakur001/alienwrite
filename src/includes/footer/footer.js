import React from 'react';
import moment from 'moment';

import './footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            instagramLink : 'https://www.instagram.com/_nikhilthakur001_',
            linkedInLink : 'https://www.linkedin.com/in/nikhil-kumar-19aa92149/',
            twitterLink : 'https://www.twitter.com/n_thakur001',
            brandName : 'AlienWrite',
            currentYear : moment().toDate().getFullYear()
        }
    }

    render() {
        return (
            <footer className='footer'>
                <div className='about-me-wrapper'>
                    <div className='social-link-wrapper'>
                        <ul className='social-link-list-wrapper'>
                            <li className='social-link-list'><p className='social-link-title'>Connect: </p></li>
                            <li className='social-link-list'><a href={this.state.instagramLink} target='_blank' className='social-link'>Instagram</a></li>
                            <li className='social-link-list'><a href={this.state.linkedInLink} target='_blank' className='social-link'>Linked In</a></li>
                            <li className='social-link-list'><a href={this.state.twitterLink} target='_blank' className='social-link'>Twitter</a></li>
                        </ul>
                    </div>
                    <ul>

                    </ul>
                </div>
                <div className='copyright-wrapper'>
                    <p className='copyright'>{this.state.brandName} &copy; {this.state.currentYear}</p>
                </div>
            </footer>
        )
    }
}

export default Footer;