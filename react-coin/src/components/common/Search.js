import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';

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
            searchQuery: ''
        }
      //  this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        const inputValue = event.target.value;
        //this.setState ({ [inputName]: inputValue})
        this.setState({searchQuery: inputValue})
        console.log(this.state);
        //If searchQuery is not present, don't ssend request to sserver
        if(!inputValue){
            console.log("Input Value Is Empty")
            return '';
        }
        fetch(`${API_URL}/autocomplete?searchQuery=${inputValue}`)
        .then(handleResponse)
        .then((result)=>{

            console.log(result)

        })
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
    render() {

        return (
            /*Controlled Controller Form Manipulation
            onSubmit={this.handleSubmit}*/

            <div >
                <input name="searchQuery" onChange={this.handleChange} />
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
export default Search;