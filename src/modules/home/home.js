import React, { Component } from 'react';

import Header from './components/header/header';
import BlogSection from './components/blogsection/blogsection';

import postImage from '../../assets/images/header.jpg';
import changeImage from '../../assets/images/change.png';
import distractImage from '../../assets/images/distract.jpg';
import comingSoonImage from '../../assets/images/comingsoon.jpg';
import thinkImage from '../../assets/images/think.jpeg';

import Navbar from '../../includes/navbar/navbar';
import Footer from '../../includes/footer/footer';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recentPost : [
                {
                    postId : 3,
                    postImage: thinkImage,
                    postDate : '31-10-2018',
                    postTitle : 'Are you really doing what you think you are doing?',
                    postDescription : 'There are moment in life when your actions does not match your thoughts. For example, deciding to use stairs instead of lift to stay fit. But when you are walking your way through the stairs you start to think that lift would have been a better option.'
                },
                {
                    postId: 2,
                    postImage: distractImage,
                    postDate : '6-10-2018',
                    postTitle : 'Distract your distractions',
                    postDescription : 'You can overcome your distractions with this small action of distracting your distractions. It just takes one second to distract from your distractions and get your attention back to where you want it to be.'
                },
                {
                    postId : 1,
                    postImage : changeImage,
                    postDate : '24-09-2018',
                    postTitle : 'Change for good',
                    postDescription : 'It\'s time for you to bring the change you always wanted to. Here are few lines from my personal experience about making a change in life.'
                }
            ],
            coffeeWithAnAlienPost : [
                {
                    postId : 4,
                    postImage : comingSoonImage,
                    postDate : '',
                    postTitle : 'About',
                    postDescription : 'Coffee with an alien is me having small conversation with different people on some amazing topics of life (chosen by them). And yes! There is always a coffee during the conversation. It is a mission to learn about life from other people\'s experience.'
                }
            ]
        }
    }

    render() {
        return (
        <div className="App">
            <Navbar />
            <Header />
            <BlogSection
                title='Recent'
                post={this.state.recentPost}
            />
            <BlogSection
                title='Coffee with an Alien'
                post={this.state.coffeeWithAnAlienPost}
            />
            <Footer />
        </div>
        );
    }
}

export default Home;
