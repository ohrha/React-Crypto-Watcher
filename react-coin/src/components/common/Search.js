import React from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';
import Loading from './loading';

import './Search.css';

class Search extends React.Component {
    // Controlled/ Uncontrolled components... Controlled components recommended teqnique to implement forms.
    /*
    Controlled components control form data in React, 
    in Uncontrolled components form input is managed by the DOM
    
    In an Uncontrolled component we can use a ref to get form values from the DOM.
    Refs are used to create a reference to a DOM node or an instance of a component.
    Using Refs is moving away from the "react " way of thinking. 
    Could be used when integrating w/ Third-Party Libraries Or animations...
    
    Using the Controlled Component technique, form values will be stored inside component state,
    and will up date on every input change.
    */
    constructor() {

        super();
        this.state = {
            searchQuery: '',
            loading: false,
            searchResults: []
        }
        //  this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }
    //Uncontrolled Method
    /* handleSubmit(event) {
         /*
                 event.preventDefault();//Stop forms default behaviour of refreshing page on submit...
                 console.log("Form Submitted")
                 /*console.log(this.searchQuery.value)
                 console.log(this.firstname.value)
                 */
    // event.preventDefault();
    // console.log(this.state)
    //}
    //Controlled Controller Form Manipulation//
    handleChange(event) {
        //const inputName = event.target.name;
        const searchQuery = event.target.value;

        this.setState({ searchQuery })
        console.log(this.state);
        //If searchQuery is not present, don't ssend request to sserver
        if (!searchQuery) {
            console.log("Input Value Is Empty")
            return '';
        }
        this.setState({
            loading: true
        })

        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(handleResponse)
            .then((result) => {

                console.log(result)
                this.setState({
                    loading: false,
                    searchResults: result,
                })

            })
        //this.setState ({ [inputName]: inputValue})
        /* if (inputName == 'searchQuery') {
 
             this.setState({
                 searchQuery: inputValue
             })
         } else if (inputName == "firstname") {
             this.setState({
                 firstname: inputValue
             })
         }
         */
        console.log(event.target.value)
        console.log(event.target.name)
    }
    renderSearchResults() {
        console.log("worke")
        const { searchResults, searchQuery, loading } = this.state;
        console.log(searchResults);
        if (!searchQuery) {
            return "";
        }
        if (searchResults.length > 0) {


            return (
                <div className="Search-result-container">
                    {searchResults.map(result => (

                        <div
                            key={result.id}
                            className="Search-result"
                            onClick={()=> this.handleRedirect(result.id)}
                        >
                            {result.name} ({result.symbol})

                    </div>

                    ))}
                </div>
            );
        }
        if (!loading) {
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No results found.
                    </div>
                </div>

            )
        }

    }
    handleRedirect(currencyId){
        //Clear  input value and close autocomplete container by clearing 
        //searchQuery state
        this.setState({
            searchQuery:"",
            searchResults:[]
        })
        //Redirection
        this.props.history.push(`/currency/${currencyId}`)
    }
    render() {
        const { loading, searchQuery} = this.state;
        return (
            /*Controlled Controller Form Manipulation
            onSubmit={this.handleSubmit}*/
            /*{ conditional boolean &&
                <some html>
              }
              Is reacts version of *ngIf or *ngHide
               */
            <div className="Search">
                <span className="Search-icon"></span>

                <input
                    className="Search-input"
                    type="text"
                    placeholder="Currency Name"
                    name="searchQuery"
                    onChange={this.handleChange}
                    value = {searchQuery}
                />

                {loading &&

                    <div className="Search-loading">

                        <Loading
                            width="12px"
                            height='12px'
                        />
                    </div>
                }
                {this.renderSearchResults()}
            </div>

            /* Uncontrolled controller form manipulation
            <form onSubmit = {this.handleSubmit}>
                 <input ref ={(input) => this.searchQuery = input}/>
                 <input ref = {(input) => this.firstname = input}/>
                 <button>Submit</button>
             </form>
             */
        )
    }

}
export default withRouter(Search);