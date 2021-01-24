import React from 'react';
import axios from "axios";
import blog from './Blog.module.css';

const Blog = (props) => {
    return (
        <div className={blog.wrapper}>
            <div className="container">
                <h1 className="pageTitle">Blog</h1>
            </div>
        </div>
    );
}

export default Blog;
