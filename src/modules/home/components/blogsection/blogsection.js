import React from 'react';

// Components
import Post from '../post/post';

import './blogsection.css';

const routeBaseUrl = 'http://localhost:3000/article/';

class BlogSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title : this.props.title,
            post : this.props.post
        }
    }

    render() {
        return (
            <div className='blog-section'>
                <div className='blog-section-title-wrapper'>
                    <h2 className='blog-section-title'>{this.state.title}</h2>
                </div>
                <div className='post-wrapper'>
                    {

                        this.state.post.map((post, index)=> {
                            return (
                                <div className='post-container'>
                                    {
                                        post.postId!==4 ?
                                        <a href={routeBaseUrl+post.postId}>
                                            <Post
                                                key={index}
                                                postDate={post.postDate}
                                                postImage={post.postImage}
                                                postTitle={post.postTitle}
                                                postDescription={post.postDescription}
                                            />
                                        </a> :
                                        <Post
                                            key={index}
                                            postDate={post.postDate}
                                            postImage={post.postImage}
                                            postTitle={post.postTitle}
                                            postDescription={post.postDescription}
                                        />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BlogSection;