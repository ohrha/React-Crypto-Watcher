import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import NotFound from './components/not found/NotFound'
import List from './components/list/list';
import Details from './components/details/Details';
import './index.css';
// Functional Component
// Components defined as classes have some additional features.. such as 
//"Component Local State"
//What is React State, it is an object that determines how our 
//components renders and behaves. Create dynamic and interactive components.

const App = () => {

    const smiley = ':)'
    return (
        <BrowserRouter>
            <div>
            <Header />
            <h1> React Coin {smiley} </h1>
            <Switch>
                <Route path = "/" component = {List} exact/>
                <Route path = "/currency/:id" component = {Details}/>
                <Route component = { NotFound }/>
            </Switch>
            </div>
        </BrowserRouter>
    )
    // <h1 className = "classname"></h1>
    /* Render on own line <br>

     return (<h1> React Coin</h1>
     );

     This Can only return one parent element meaning that 
     we cannot return two sibling elements..

     ERROR:
     return (<h1> React Coin</h1>
             <p> Hello World!</p>
     )
     This must be wrapped in a parent element...
     CORRECT:
     return (<div>
                <h1> React Coin </h1>
                <p> Hello World! </p>
            </div>
     )
     Self closing tags must be closed with a forward slash.
     ex <br />
     */
    //Render a variable..


}

ReactDOM.render(

    <App />,
    document.getElementById('root')


);