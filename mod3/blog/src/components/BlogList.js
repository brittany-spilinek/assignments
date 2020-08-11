import React from 'react';
import posts from './posts'
import BlogPost from './BlogPost'

function BlogList () {
    //map through posts and put them in BlogPost.js
    const blogPostComponent = posts.map(post => <BlogPost 
        title={post.title}
        subTitle={post.subTitle}
        author={post.author}
        date={post.date}
    />)

    return (
        <div>
            {blogPostComponent}
        </div>
    )
}

export default BlogList