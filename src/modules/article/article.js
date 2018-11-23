import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import articleImage from '../../assets/images/header.jpg';

import './article.css';

import Navbar from '../../includes/navbar/navbar';
import Footer from '../../includes/footer/footer'; 

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleImage,
            articleBy : 'Alien',
            articleDate : '15-11-2018',
            title : 'What I learned this year',
            theArticle : 'One morning you woke up and decided to expel yourself from the list of mediocres. You made a complete inventory of things that you are going to work on and started your mission towards a better life. Everything was going great and you were on your endeavour for a very long time, say around 3 days (not that long though). After that you start losing hope because nothing was working, you were not able to properly follow whatever you decided. No results could be seen. Tired of which you sabotage your mission and continued the way you were',
            likeCount : 0,
            currentCommentValue : '',
            articleLikedByCurrentUser : false,
            comments : [
                {
                    commentByName : 'Nikhil',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'Some Comment'
                },
                {
                    commentByName : 'Nitin',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'This comment is different from others, because this one is long and cool and written by a cool guy oh yeah.. this is awesome article.'
                },
                {
                    commentByName : 'Nikhil',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'Some Comment'
                },
                {
                    commentByName : 'Nitin',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'This comment is different from others, because this one is long and cool and written by a cool guy oh yeah.. this is awesome article.'
                },
                {
                    commentByName : 'Nikhil',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'Some Comment'
                },
                {
                    commentByName : 'Nitin',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'This comment is different from others, because this one is long and cool and written by a cool guy oh yeah.. this is awesome article.'
                },
                {
                    commentByName : 'Nikhil',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'Some Comment'
                },
                {
                    commentByName : 'Nitin',
                    commentByEmail : 'nikhilthakur3197@gmail.com',
                    commentContent : 'This comment is different from others, because this one is long and cool and written by a cool guy oh yeah.. this is awesome article.'
                }
            ]
        }
    }

    likeHandler = () => {
        this.setState((previousState, previousProps)=>({
            articleLikedByCurrentUser : !previousState.articleLikedByCurrentUser
        }));
    }

    commentHandler = e => this.setState({currentCommentValue : e.target.value});

    render() {
        return (
            <div className='article'>
                <Navbar />
                <div className='article-image-wrapper'>
                    <div 
                        className='article-image'
                        style={{'backgroundImage':'url('+articleImage+')'}}
                    />
                    <div className='article-container'>
                        <div className='article-content'>
                            <div className='article-title-wrapper'>
                                <h2 className='article-title'>{this.state.title}</h2>
                            </div>
                            <div className='article-date-wrapper'>
                                <p className='article-date'>
                                    {this.state.articleDate} | - {this.state.articleBy}
                                </p>
                            </div>
                            <div className='the-article-wrapper'>
                                <div className='the-article'>
                                    <p>{this.state.theArticle}</p>
                                    <p>{this.state.theArticle}</p>
                                    <p>{this.state.theArticle}</p>
                                    <p>{this.state.theArticle}</p>
                                </div>
                            </div>
                        </div>
                        <div className='article-actions-wrapper'>
                            <div className='article-actions-wrapper-overlay'>
                                <div className='article-actions-title-wrapper'>
                                    <h3 className='article-actions-title'>Likes and Comments</h3>
                                </div>
                                <div className='article-like-wrapper'>
                                    <div className='article-like-count-wrapper'>
                                        <span className='article-like-count'>
                                            {
                                                this.state.likeCount<2 ? this.state.likeCount+' Like' : this.state.likeCount+' Likes'
                                            }
                                        </span>
                                    </div>
                                    <div className='article-like-button-wrapper'>
                                        <button 
                                            className={this.state.articleLikedByCurrentUser ? 'article-like-button liked' : 'article-like-button'}
                                            onClick={()=>this.likeHandler()}
                                        >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            {
                                                this.state.articleLikedByCurrentUser ? ' Liked' : ' Like'
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div className='article-comment-wrapper'>
                                    <div className='article-previous-comment-wrapper'>
                                        {
                                            this.state.comments.map((value, index)=>{
                                                return (
                                                    <div className='article-previous-comment' key={index}>
                                                        <div className='comment-data-wrapper'>
                                                            <p className='comment-data'>{value.commentContent}</p>
                                                        </div>
                                                        <div className='comment-by-wrapper'>
                                                            <p className='comment-by'>- {value.commentByName}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='article-comment-input-actions'>
                                        <div className='article-comment-input-wrapper'>
                                            <textarea
                                                className='article-comment-input'
                                                rows="3"
                                                placeholder='comment here...'
                                                value={this.state.currentCommentValue}
                                                onChange={(e)=>this.commentHandler(e)}
                                            />
                                        </div>
                                        <div className='article-comment-button-wrapper'>
                                            <button className='article-comment-button'>Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Article;