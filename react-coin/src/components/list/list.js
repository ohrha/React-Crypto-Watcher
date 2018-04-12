import React from 'react';

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
    componentWillRecieveProps() {

    }

    //This method is similar to a constuctor, because it invoked immediately
    //before mounting occurs.Before render method.
    componentWillMount() {


    }
    //This method is called immediately after a component is mounted. Ajax calls
    //adding event listeners, and manipulating the DOM is...
    componentDidMount() {
        this.setState({loading:true});
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                this.setState({ 
                    currencies: data.currencies, 
                    loading:false })
                //console.log('Success', data);
            })
            .catch((error) => {
                this.setState({
                     error: error.errorMessage, 
                     loading:false})
                //console.log('Error', error);
            });

    }
    render() {
        if (this.state.loading) {

            return <div>Loading...</div>

        }
        return (
            <div>text</div>
        )

    }


}
export default List;