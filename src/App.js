import Posts from './components/Posts/Posts';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Posts />
            </div>
        );
    }
}

export default App;
