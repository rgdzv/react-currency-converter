import React from 'react'
import './Card.scss'
import { Countries } from './../../helper/interfaces'

interface CardProps {
  defaultCountry: string,
  changeSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  amount: number,
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  сurrencyShortName: string,
  currencySymbol: string,
  countries: Countries[],
  countryFlag: string,
  currencyFullName: string,
  currencyFooterName: string,
  footerCurrencyRate: number
}

const Card: React.FC<CardProps> = ({ 
  defaultCountry, 
  changeSelectValue, 
  amount, 
  changeInput, 
  сurrencyShortName, 
  currencySymbol, 
  countries, 
  countryFlag, 
  currencyFullName,
  currencyFooterName, 
  footerCurrencyRate 
}) => {
  return (
    <div className="card">
      <div className="currency__country">
        <select value={defaultCountry} onChange={changeSelectValue}>
          {countries && countries.map((country) => (
            <option 
              key={country.name} 
              value={country.name}
            >
              {country.name.length > 25 
                ? 
                  country.name.slice(0,30) + '...' 
                : 
                  country.name
              }
            </option> 
          ))}
        </select>
      </div>
      <div className="currency__content">
        <div className="currency__content__symbol">
          <p>{currencySymbol} {сurrencyShortName}</p>
          <img src={countryFlag} alt={countryFlag}/>
        </div>
        <input 
          type="number" 
          value={amount ? amount : ''} 
          onChange={changeInput} 
          min="0"
        />
      </div>
      <div className="currency__board">
        <div className="currency__board__name">{currencyFullName}</div>
        <div className="currency__board__value">{`1 ${сurrencyShortName} = ${footerCurrencyRate} ${currencyFooterName}`}</div>
      </div>
    </div>
  )
}

export default Card
