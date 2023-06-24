import './index.css'

const CryptocurrencyItem = props => {
  const {dataDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = dataDetails
  return (
    <li className="list-card">
      <div className="first-card">
        <img src={currencyLogo} alt={currencyName} className="image" />
        <p className="first-heading">{currencyName}</p>
      </div>
      <div className="last-card">
        <p className="last-des">{usdValue}</p>
        <p className="last-para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
