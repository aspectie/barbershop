import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header/>
                    <div className="content-wrapper">
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={'/home'}/>}/>

                            <Route path='/home'
                                   render={() => <Home/>}/>

                            <Route path='/shop'
                                   render={() => <Shop/>}/>

                            <Route path='/blog'
                                   render={() => <Blog/>}/>

                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>

            </BrowserRouter>
        )
    }
}

export default App;
