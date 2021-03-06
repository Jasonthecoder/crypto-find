import React, { Component } from 'react';

import './CryptoCurrency.css';

class CryptoCurrency extends Component {
  render () {
    var {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
    } = this.props.data;
    return (
      <li className={"Cryptocurrency " + id} >
        <p className="cryptocurrency-name">{name} ({symbol})</p>
          <h1>${ (+price_usd).toFixed(2) }</h1>
          <p>{percent_change_1h}% 1hr</p>
          <p>{percent_change_24h}% 24hr</p>
          <p>{percent_change_7d}% 7 days</p>
      </li>
    )
  }
}

const divStyle = {

};

export default CryptoCurrency;
