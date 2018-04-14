import React from 'react';
import { API_URL } from '../../config';

import { handleResponse, renderChangePercent } from '../../helpers';
import Loading from '../common/loading';
import './Details.css';

class Details extends React.Component {
    //Another way to define state..
    /*state = {
        currency:{},
        loading: false,
        error:null
    }
    */
    constructor() {
        super();
        this.state = {

            currency: {},
            loading: false,
            error: null

        }
    }

    componentDidMount() {
        console.log("component has been mounted", this.props)
        const currencyId = this.props.match.params.id;
       this.fetchCurrency(currencyId);

    }
    //Lifecycle hook/method that will detect and update of the component.
    componentWillReceiveProps(nextProps){

        console.log("component has beeen updated", nextProps)

        if(this.props.location.pathname !== nextProps.location.pathname){
            //Get new currency id from url
            const newCurrencyId = nextProps.match.params.id;
            this.fetchCurrency(newCurrencyId);

        }
    }
    fetchCurrency(currencyId){
         this.setState({ loading: true })

        console.log(currencyId)
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(handleResponse)
            .then((currency) => {
                this.setState({
                    loading: false,
                    currency,
                    error: null
                })
                console.log("currency", currency);
            })
            .catch((error) => {

                this.setState({
                    loading: false,
                    error: error.errorMessage
                })

                console.log('error', error)
                console.log(this.state.error)

            })

    }
    render() {
        const { loading, error, currency } = this.state;
        console.log("currency", currency)

        // Render loading component if loading state is true;
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if (error) {
            return <div className="error">{error}</div>
        }
        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                    </h1>

                <div className="Detail-container">
                    <div className="Detail-item">
                        Price <span className="Detail-value">$ {currency.price}</span>
                    </div>
                    <div className="Detail-item">
                        Rank <span className="Detail-value">{currency.rank}</span>
                    </div>
                    <div className="Detail-item">
                        24H Change <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span>
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Market cap</span>
                        <span className="Detail-dollar">$</span>
                        {currency.marketCap}

                    </div>
                               <div className="Detail-item">
                        <span className="Detail-title">24H Volume</span>
                        <span className="Detail-dollar">$</span>
                        {currency.volume24h}

                    </div>
                                                <div className="Detail-item">
                        <span className="Detail-title">Total Supply</span>
                        {currency.totalSupply}

                    </div>
                </div>
            </div>
        )

    }
}

export default Details