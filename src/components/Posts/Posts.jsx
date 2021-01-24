import React, {Component} from 'react';
import axios from "axios";

export class Posts extends Component {
    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('wp-json/wp/v2/posts')
            .then(res => this.state({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)
        return (
            <div>
                
            </div>
        );
    }
}

export default Posts;
