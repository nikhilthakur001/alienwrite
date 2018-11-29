import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import changeImage from '../../assets/images/change.png';
import distractImage from '../../assets/images/distract.jpg';
import thinkImage from '../../assets/images/think.jpeg';

import './article.css';

import Navbar from '../../includes/navbar/navbar';
import Footer from '../../includes/footer/footer'; 

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles : [
                {
                    articleImage: changeImage,
                    articleBy : 'Alien',
                    articleDate : '10 July, 2018',
                    title : 'Change for good',
                    theArticle : 'One morning you woke up and decided to expel yourself from the list of mediocres. You made a complete inventory of things that you are going to work on and started your mission towards a better life. Everything was going great and you were on your endeavour for a very long time, say around 3 days (not that long though). After that you start losing hope because nothing was working, you were not able to properly follow whatever you decided. No results could be seen. Tired of which you sabotage your mission and continued the way you were. <br/><br/> <em>"If you pull a spring and realease it, it will get back to its original shape. But if you pull a spring and keep it in that position for a long time, it will atain a new shape."</em><br/><br/> The same is the case with a human brain. If you want a better life or want to procure anything in life, you need to keep following whatever you have decided. Start will be onerous but you don\'t have to lose hope, no matter how many times you fizzle. As mentioned earlier you brain is like a spring, you want to alter it\'s shape, it\'s properties. To change something like that you got to haul that spring and keep it likewise for a very long time so as to make it invariable. In your case streching the spring means to follow whatever you have decided. Change takes time, the most prevalent reason why people give up is because they want to see the result briskly. But destiny demands endeavour, sometimes you will have to work for years to bring that change. In his book "365 Days with Self-Discipline", Martin mentioned that <em>in order to be a superlative basketball player you will have to practice for years, it cannot be done in 2 or 3 days or even in a week.</em> The day you will remove your focus from the end result and make the process your cynosure, things will start changing and if you are true to your process and your efforts are bona fide, you will achieve whatever you are seeking for. <br/><br/><em>"Patience and Persistence is the key."</em> <br/> <br/> When I started my haul to change myself to be a better human. At the start it was very difficult. For the first 10 days I was still at the same predicament where I was earlier, nothing changed. But this time I was too commited to my promise to change for a better cause and to be a better human, as 2-3 more days passed, I realised that I was just focusing on the final outcome and was being frustated just because things were not the way I wanted them to. Because I was busy wasting my mind focusing on the negative thought of not getting the desired outcome in 10 days, I was unable to see that things have started to change tough. <em>I wanted to build a house. So I started with the bricks, after two rows of bricks were added I stepped back and had a look, it was no where close to a house. There was just a stack of bricks one over the other. I was very dissappointed. Soon I realised that there was a lens of expectation environing my eyes, when I eliminated that lens I saw that I was one step closer to building that house. Also I realised that I will get a result if I kept adding the bricks. It will take time but it will happen. </em> <br/> <br/> So whenever next time you feel that the change is not happening or get dissappointed by not seeing the outcome, just take a deep breath, remove the lens of expectations and then observe the situtaion. Trust me, things will look far better and will prompt you to keep making the effort to <em>change for good</em>. <br/><br/>',
                    likeCount : 0
                },
                {
                    articleImage: distractImage,
                    articleBy : 'Alien',
                    articleDate : '15 July, 2018',
                    title : 'Distract your distractions',
                    theArticle : 'Starting to change is not that easy. For example, I decided not to eat junk food or any outside unhealthy food. For 3 days everything was going great, but then I ate momos. I thought that it\'s ok, from now on I will not eat anything unhealthy. The very next day I went to the shop and bought some chips. It was 2 days back to back. Then I thought, it\'s been 2 successive days that I am being distracted from my decision and told myself that it was the last time. But again I ate something and this continued. Changing your habits and sticking to your decision at start is a gruelling task. You will break the laws you created for yourself and then you will be crestfallen due to the fact that you were unable to defy your temptation. <br /> <br /> Your mind will invariably tell you to leave your decision as you were unable to stop yourself and got distracted. But you can take it as a challenge that your past doesn\'t define you and you can again get back to before you were distracted. The question is how to stop distractions from distracting you? The answer is simple <em>distract your distractions.</em> For example, you decided that you will not drink carbonated drinks. You went to your fridge to drink water and saw a fresh cold bottle of coke kept in front of you. All you have to do is to simply take your eyes off the coke, drink water and shut the fridge door. It just takes a couple of seconds to distract your distractions and stop yourself from breaking the laws (and vice-versa). <br /> <br /> <em>"Say you started to climb a mountain. It\'s a 7000ft high journey. You reached 40ft above the     ground and saw an elegant flower. You know that 7000ft above resides an exquisite view still     the biggest game played by our mind is that it can distract you with the modest things neglecting     the future that holds the big. The flower was so beautiful that you cannot resist yourself     from heading towards it. Deep inside you know that you ought to climb, but you want that     flower also. Again comes that big law breaking moment and since your mind is habituated to     neglect the big upcoming just for the small buzz in life, you decided to go towards that     flower. You got that flower and was relished. While you were enjoying the juncture, your     legs sliped and you fell down to zero. You learned that it was a mistake getting distracted     with the small thing and leaving your path. Now most folks will think they tried, reached     40ft and slipped so there\'s no point in climbing the mountain. The truth is, they got distracted     on their path, and they should take it as a lesson and start again but this time not to run     for the small buzz, but to follow the path ahead. And when you see that flower again, you     just have to distract your mind from it and pursue your mission. As soon as you will reach     41ft above the ground, you won\'t even return 1ft back to take that flower. And that\'s how it works, just a second between breaking the laws or to desist yourself from doing the same."</em> <br /> <br /> Even today I still endeavour to stop myself from being distracted. You are trying to change the wiring of your brain which had been building there since the birth. To do that you will have to discern its wiring, then step by step it will lead you to the path. After that all that matters is how you follow your path. When things distract me, I remind my self these 12 words: <br /> <br /> <em>"It just take couple of seconds to stop yourself from being distracted."</em> <br /> <br /> It\'s all in your hands how you govern your mind and how you shape your life. No doubt is hard, but it is possible. I have tried and seen results. You are not here to go for the flower at 40ft, but to discover and feel how tempting it is going to be like when you will be at 7000ft. How things going to look, what life will be like. Settling for something just because you want instant gratification is nothing but your mind trying to fool you. It\'s all inside you and you only have to teach your mind that you are here not to settle with life but to live your life that you deserve. <br /> <br />',
                    likeCount : 0
                },
                {
                    articleImage: thinkImage,
                    articleBy : 'Alien',
                    articleDate : '30 July, 2018',
                    title : 'Are you really doing what you think you are doing?',
                    theArticle : 'There\'s a huge difference between things that you do and things that you think you are doing. Confused! Let me make it clear by giving you the example on how I realised this. I made an inventory of do\'s and don\'ts and I was working according. But still there were times when I used to get frustrated and sad. Things start to fall apart again. There was something wrong, something which was missing. My actions were different but the thought process was the same. It was just that I learned how to control my actions but deep down somewhere I was still confined to the typically thought, which was continously bothering me. What I learned is that <em>my thoughts and my actions were in great contrast</em>. I was so convinced by my actions of going towards positivity that I forgot, pretending as positive from outside won\'t change my thought that were still adamant inside. <br> <br> <em>"Your thoughts must synchronise you actions."</em> <br> <br>Living a fake life can never lead you to be a better person. I don’t mean that you are living a fake life, but in the process of becoming better you try probabily every possible way you could, but your thoughts still remains the same. This is not going to make you better instead you will end up being more broken. You are trying to hack life and control one of the most powerful things, "your brain”. Doing so requires you to completely analyse yourself and the best way to do so is talking to yourself, it always works. Believe me, somewhere inside you lies the solution, you just don’t want to accept that. We as a human have a tendency to believe and act on others advices but we neglect the calls our inner voice is making. <br> <br> To make it more clear, let us take one more example - You wanted to be more patient in hard situations. It was summer and temperature was burning hot. You decided that you will use your bike instead of car to go to the office. First two days went well; third day you were on your way to the office, exhausted and irritated due to the hot weather and you were thinking - “If I were in my car, there would be AC and all sorts of comfort...”. Your action meant that <em>you were doing something to test your patience which inturn makes you more comfortable in hard situations</em>, but thoughts implies something else. This is what I meant by telling that you think you were doing right but actually you were not. <br> <br> All I want to say is that if you want real change and positivity in life, not just control you actions but also control your thoughts. You will eventually end up being what you think instead what you show.',
                    likeCount: 10
                }
            ],
            articleId : this.props.match.params.id-1,
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
                        style={{'backgroundImage':'url('+this.state.articles[this.state.articleId].articleImage+')'}}
                    />
                    <div className='article-container'>
                        <div className='article-content'>
                            <div className='article-title-wrapper'>
                                <h2 className='article-title'>{this.state.articles[this.state.articleId].title}</h2>
                            </div>
                            <div className='article-date-wrapper'>
                                <p className='article-date'>
                                    {this.state.articles[this.state.articleId].articleDate} | - <span className='article-by'>{this.state.articles[this.state.articleId].articleBy}</span>
                                </p>
                            </div>
                            <div className='the-article-wrapper'>
                                <div className='the-article' dangerouslySetInnerHTML={{__html: this.state.articles[this.state.articleId].theArticle}} />
                            </div>
                        </div>
                        <div className='article-actions-wrapper'>
                            <div className='article-actions-wrapper-overlay'>
                                <div className='article-actions-title-wrapper'>
                                    {/* <h3 className='article-actions-title'>Likes and Comments</h3> */}
                                    <h3 className='article-actions-title'>Liked the Article?</h3>
                                </div>
                                <div className='article-like-wrapper'>
                                    <div className='article-like-count-wrapper'>
                                        <span className='article-like-count'>
                                            {
                                                this.state.articles[this.state.articleId].likeCount<2 ? this.state.articles[this.state.articleId].likeCount+' Like' : this.state.articles[this.state.articleId].likeCount+' Likes'
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
                                <div className='article-comment-wrapper' style={{display:'none'}}>
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
                                <div className='like-bitmoji-wrapper'>
                                        <div className='like-bitmoji'></div>
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