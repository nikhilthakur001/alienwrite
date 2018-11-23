import React, { Component } from 'react';

import Header from './components/header/header';
import BlogSection from './components/blogsection/blogsection';

import postImage from '../../assets/images/header.jpg';
import changeImage from '../../assets/images/change.jpg';

import Navbar from '../../includes/navbar/navbar';
import Footer from '../../includes/footer/footer';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recentPost : [
                {
                    postImage,
                    postDate : '10-11-2018',
                    postTitle : 'What I learned this year',
                    postDescription : '2018 has been a major change in my life. I am sure this will help you to figure out few of things you may be facing right now.'
                },
                {
                    postImage,
                    postDate : '31-10-2018',
                    postTitle : 'Why I took a leap from writing blogs',
                    postDescription : '2018 has been a major change in my life. You may be facing right now.'
                },
                {
                    postImage,
                    postDate : '6-10-2018',
                    postTitle : 'Distract your distractions',
                    postDescription : 'I am sure this will help you to figure out few of things you may be facing right now.'
                },
                {
                    postImage : changeImage,
                    postDate : '24-09-2018',
                    postTitle : 'Change for good',
                    postDescription : 'figure out few of things you may be facing right now.'
                }
            ],
            coffeeWithAnAlienPost : [
                {
                    postImage,
                    postDate : '2-10-2018',
                    postTitle : 'Coffee 1',
                    postDescription : '2018 has been a major change in my life. I am sure this will help you to figure out few of things you may be facing right now.'
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
