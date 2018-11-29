import React from 'react';

import './post.css';

class Post extends React.Component {
    
    render() {
        return (
            <div className='post'>
                <div className='post-image-wrapper'>
                    <div className='post-image' style={{'backgroundImage' : 'url('+this.props.postImage+')'}}></div>
                </div>
                <div className='post-content'>
                    <div className='post-title-wrapper'>
                        <h4 className='post-title'>{this.props.postTitle}</h4>
                    </div>
                    <div className='post-date-wrapper'>
                        <p className='post-date'>{this.props.postDate}</p>
                    </div>
                    <div className='post-title-divider-wrapper'>
                        <div className='post-title-divider'></div>
                    </div>
                    <div className='post-description-wrapper'>
                        <p className='post-description'>{this.props.postDescription}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Post;