import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    dataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDataList()
  }

  getDataList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({dataList: updateData, isLoading: false})
  }

  render() {
    const {dataList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="card">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="card-details">
              <div className="title-card">
                <h2 className="head">Coin Type</h2>
                <div className="card-1">
                  <h2 className="head">USD</h2>
                  <h2 className="head">EURO</h2>
                </div>
              </div>

              <ul className="list-container">
                {dataList.map(each => (
                  <CryptocurrencyItem dataDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
