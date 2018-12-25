import React, { Component } from 'react';
import axios from 'axios';

import './Tickers.css'

//import CryptoCurrency Component
import CryptoCurrency from './CryptoCurrency.js';
import './Tickers.css';

class  Tickers extends Component {
  fetchCryptoCurrencyData() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        var wanted = ['bitcoin','ethereum','litecoin'];
        var result = response.data.filter(currency => wanted.includes(currency.id));
        this.setState({ data : result });
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.fetchCryptoCurrencyData();
    this.interval = setInterval(() => this.fetchCryptoCurrencyData(), 6 * 1000);

  }

  state = {
    data:[
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        price_usd: '1',
        percent_change_1h: '0',
        percent_change_24h: '0',
        percent_change_7d: '0',
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        price_usd: '1',
        percent_change_1h: '0',
        percent_change_24h: '0',
        percent_change_7d: '0',
      },
      {
        id: 'litecoin',
        name: 'Litecoin',
        symbol: 'LTC',
        price_usd: '1',
        percent_change_1h: '0',
        percent_change_24h: '0',
        percent_change_7d: '0',
      },
    ]
  }
  render(){
    var tickers = this.state.data.map((currency) =>
    <CryptoCurrency data={currency} key={currency.id}/>
  )

  return (
    <div className="tickers-containers">
      <ul className='tickers'>{tickers}</ul>
        <p>Information takes 1 minute to fetch, thanks to coinmarketcap.com</p>
    </div>
  );
}
}

export default Tickers;
