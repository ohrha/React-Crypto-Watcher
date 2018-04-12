import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import loading from '../common/loading';
import './Table.css';
//Inside curly braces because we don't export it by 
//to default from helpers file..
class List extends React.Component {
    //Every class based component should return
    //some UI element with a render method.
    //First create initial state of our component.

    constructor() {
        //When you create a class constructor in react, we must create a super()
        //method, because ES6 requires you to call the super method if the class is a sub
        //class. And Every class in react is a sub-class of the "React Component class"
        //The "React".Component keyword is un-initialized if super is not called;
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,

        };
    }
    //React Class Components have lifecycle methods which allow one to run
    //code at a particular time. Methods prefixed with will, are called right before
    //something happens, and then comes after the method is called.

    //This is called when a component is unmounted..
    componentWillUnmount() {


    }

    //This method is called when a component is being updated...
    componentWillReceiveProps() {

    }

    //This method is similar to a constuctor, because it invoked immediately
    //before mounting occurs.Before render method.
    componentWillMount() {


    }
    //This method is called immediately after a component is mounted. Ajax calls
    //adding event listeners, and manipulating the DOM is...
    componentDidMount() {
        this.setState({ loading: true });
        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`) //ES6 template literal
            .then(handleResponse
            /*  return response.json().then(json => { // Converts response object to JSON object.
                  return response.ok ? json : Promise.reject(json);// Then checks whether response was successful.
                  //Or else rejects the promise. So you can respond to the error in the catch handler 
                  //method.
              });
              */
            //In Helpers.js
            )
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading: false
                })
                console.log('Success', data);
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false
                })
                //console.log('Error', error);
            });

    }

    //custom method
    renderChangePercent(percent){

        if(percent>0){
            return <span className="percent-raised">{percent}% &uarr;</span>
        }else if(percent < 0){
            return <span className = "percent-fallen">{percent}% &darr;</span>
        }else{
           return  <span>{percent}</span>
        }

    }
    render() {
        //ES6 MAGIC
        const { loading,error,currencies } = this.state;
        /* Same as...
        const loading = this.state.loading;
        const error = this.state.error;
        const currencies = this.state.currencies
        */
        if (loading) {

            return <div className = "loading-container"><loading /></div>

        }
        if(error){
            return <div className = "error">{error}</div>
        }
        return (
            <div className="Table-container">

                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>Cryptocurrency</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24hr Change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                        {
                            this.state.currencies.map((currency) => (
                                <tr key={currency.id}>
                                    <td>
                                        <span className="Table-rank">{currency.rank}</span>
                                        {currency.name}
                                    </td>
                                    <td>
                                        <span className="Table-dollar">${currency.price}</span>
                                    </td>
                                    <td>
                                        <span className="Table-dollar">${currency.marketCap}</span>
                                    </td>
                                    <td>
                                        {this.renderChangePercent(currency.percentChange24h)}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>

                </table>
            </div>
                    )
        // Warning, each child in an array or iterator should have a
        // unique 'key" prop", check the render method.
        //Everytime you loop through an object, you should give a unique 
        //key to each child element, because keys help react identify
        //which items have changed.
        //The best way is to use a string that uniquely identifies, each item.

    }


}
export default List;