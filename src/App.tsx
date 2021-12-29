import './App.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Countries } from './helper/interfaces'
import preloader from './images/preloader.gif'

const App: React.FC = () => {
  
  const [countries, setCountries] = useState<Countries[]>([])

  const [fromCountryOption, setFromCountryOption] = useState('')
  const [toCountryOption, setToCountryOption] = useState('')

  const [fromCurrencyShortName, setFromCurrencyShortName] = useState('')
  const [toCurrencyShortName, setToCurrencyShortName] = useState('')

  const [fromCurrencySymbol, setFromCurrencySymbol] = useState('')
  const [toCurrencySymbol, setToCurrencySymbol] = useState('')

  const [fromCountryFlag, setFromCountryFlag] = useState('')
  const [toCountryFlag, setToCountryFlag] = useState('')

  const [fromCurrencyFullName, setFromCurrencyFullName] = useState('')
  const [toCurrencyFullName, setToCurrencyFullName] = useState('')

  const [fromFooterCurrencyRate, setFromFooterCurrencyRate] = useState(0)
  const [toFooterCurrencyRate, setToFooterCurrencyRate] = useState(0)

  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [exchangeRate, setExchangeRate] = useState(0)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  let fromAmount, toAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = parseFloat((amount * exchangeRate).toFixed(2))
  } else {
    toAmount = amount
    fromAmount = parseFloat((amount / exchangeRate).toFixed(2))
  }

  const handleSetFromCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCountryOption(e.target.value)
    const countriesCopy = countries.slice(0)
    countriesCopy.forEach(country => {
      if (e.target.value === country.name.common){
        const key = Object.keys(country.currencies)[0]
        setFromCurrencyShortName(key)
        setFromCurrencySymbol(country.currencies[key].symbol)
        setFromCountryFlag(country.flags.svg)
        setFromCurrencyFullName(country.currencies[key].name)
      }
    })
    setError('')
  }

  const handleSetToCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCountryOption(e.target.value)
    const countriesCopy = countries.slice(0)
    countriesCopy.forEach(country => {
      if (e.target.value === country.name.common){
        const key = Object.keys(country.currencies)[0]
        setToCurrencyShortName(key)
        setToCurrencySymbol(country.currencies[key].symbol)
        setToCountryFlag(country.flags.svg)
        setToCurrencyFullName(country.currencies[key].name)
      }
    })
    setError('')
  }

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value))
    setAmountInFromCurrency(true)
  }

  const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value))
    setAmountInFromCurrency(false)
  }

  const fetchData = async () => {
    try {
      const currenciesResponse = await axios.get('https://api.frankfurter.app/currencies')
      const currenciesData = await currenciesResponse.data
      const countriesResponse = await axios.get('https://restcountries.com/v3.1/all')
      const countriesData: Countries[] = await countriesResponse.data

      const baseCurrencyResponse = await axios.get(`https://api.frankfurter.app/latest?from=USD`)
      const baseCurrencyResponceData = await baseCurrencyResponse.data.rates
      const filteredBaseCurrency = Object.keys(baseCurrencyResponceData)[26]

      const countriesWithCurrency = countriesData.filter(item => item.currencies)
      const filteredCountriesData = countriesWithCurrency.filter(country => {
        const key = Object.keys(country.currencies)[0]
        return currenciesData[key]
      })
      const sortedCountriesData = filteredCountriesData.sort((a, b) => a.name.common > b.name.common ? 1 : a.name.common < b.name.common ? -1 : 0)

      setCountries(sortedCountriesData)

      const firstDefaultCurrencyKey = Object.keys(sortedCountriesData[95].currencies)[0]
      const secondDefaultCurrencyKey = Object.keys(sortedCountriesData[72].currencies)[0]

      setFromCountryOption(sortedCountriesData[95].name.common)
      setFromCurrencySymbol(sortedCountriesData[95].currencies[firstDefaultCurrencyKey].symbol)
      setFromCurrencyShortName(firstDefaultCurrencyKey)
      setFromCountryFlag(sortedCountriesData[95].flags.svg)
      setFromCurrencyFullName(sortedCountriesData[95].currencies[firstDefaultCurrencyKey].name)

      setToCountryOption(sortedCountriesData[72].name.common)
      setToCurrencySymbol(sortedCountriesData[72].currencies[secondDefaultCurrencyKey].symbol)
      setToCurrencyShortName(secondDefaultCurrencyKey)
      setToCountryFlag(sortedCountriesData[72].flags.svg)
      setToCurrencyFullName(sortedCountriesData[72].currencies[secondDefaultCurrencyKey].name)
      setExchangeRate(baseCurrencyResponceData[filteredBaseCurrency])
      setLoading(false)
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  const fetchConvertedCurrencies = async () => {
    try {
      if (fromCurrencyShortName && toCurrencyShortName) {
        const convertedCurrenciesResponse = await axios.get(`https://api.frankfurter.app/latest?&amount=1&from=${fromCurrencyShortName}&to=${toCurrencyShortName}`)
        const convertedCurrenciesResponseData = await convertedCurrenciesResponse.data.rates
        setFromFooterCurrencyRate(convertedCurrenciesResponseData[toCurrencyShortName].toFixed(2))
        setToFooterCurrencyRate(parseFloat((1 / convertedCurrenciesResponseData[toCurrencyShortName]).toFixed(2)))
        setExchangeRate(convertedCurrenciesResponseData[toCurrencyShortName])
      }
    } catch(err: any) {
      setError('Please, convert different currencies!')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchConvertedCurrencies()
  }, [fromCurrencyShortName, toCurrencyShortName])

  return (
    <Container style={{ paddingTop: '20px', minHeight: '100vh'}}>
      <Row>
        <Col>
          <Header>
            Currency converter
          </Header>
        </Col>
      </Row> 
      <Row justify='center'>
        <Col style={{maxWidth: '350px'}}>
          {loading 
            ?
              <div className="loading">
                <img src={preloader} alt={preloader}/>
              </div>
            :
              <>
                <Card 
                  defaultCountry={fromCountryOption}
                  changeSelectValue={handleSetFromCurrency}
                  amount={fromAmount}
                  changeInput={handleFromAmountChange}
                  сurrencyShortName={fromCurrencyShortName}
                  currencySymbol={fromCurrencySymbol}
                  countryFlag={fromCountryFlag}
                  currencyFullName={fromCurrencyFullName}
                  countries={countries}
                  currencyFooterName={toCurrencyShortName}
                  footerCurrencyRate={fromFooterCurrencyRate}
                />
                <Card 
                  defaultCountry={toCountryOption}
                  changeSelectValue={handleSetToCurrency}
                  amount={toAmount}
                  changeInput={handleToAmountChange}
                  сurrencyShortName={toCurrencyShortName}
                  currencySymbol={toCurrencySymbol}
                  countryFlag={toCountryFlag}
                  currencyFullName={toCurrencyFullName}
                  countries={countries}
                  currencyFooterName={fromCurrencyShortName}
                  footerCurrencyRate={toFooterCurrencyRate}
                />
              </>
          }
          {error &&
            <div className="error">{error}</div>
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer/>
        </Col>
      </Row>   
    </Container>
  )
}

export default App
