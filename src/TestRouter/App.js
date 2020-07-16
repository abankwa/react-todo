import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export default function App() {
    return (
        <Router basename="/">
        {/*<Router basename="/react-todo">*/}
            <Switch>
            <div>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/users">
                    <div>
                        <h3>booya</h3>
                        <Users/> 
                    </div>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/topics">
                    <Topics/>
                </Route>
            </div>
            </Switch>
        </Router>
    )
}

function Home(){
    let location = useLocation();
    let history = useHistory();
    let params = useParams();
    const click = () => {
        console.log(location)
    }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={click}>click</button>
            <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/topics/">Topics</Link>
                        </li>
                    </ul>
                </nav>
        </div>

    )
}

function About(){
    return (
        <div>
            <h2>About</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

function Users(){
    return (
        <div>
            <h2>Users</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

function Topics(){
    return (
        <div>
            <h2>Topicss</h2>
            <Link to="/">Home</Link>
        </div>
    )
}