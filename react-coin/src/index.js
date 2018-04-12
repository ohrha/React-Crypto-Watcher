import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
// Functional Component

const App = ()=>{

    const smiley = ':)'
    return (
            <div>
                <Header />
                <h1> React Coin {smiley} </h1>
             </div>
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

    <App/>,
    document.getElementById('root')


);