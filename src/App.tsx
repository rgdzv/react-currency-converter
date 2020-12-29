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

  const [loading, setLoading] = useState(false)
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
    countries.map(country => {
      if (e.target.value === country.name){
        setFromCurrencyShortName(country.currencies[0].code)
        setFromCurrencySymbol(country.currencies[0].symbol)
        setFromCountryFlag(country.flag)
        setFromCurrencyFullName(country.currencies[0].name)
      }
    })
    setError('')
  }

  const handleSetToCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCountryOption(e.target.value)
    countries.map(country => {
      if (e.target.value === country.name){
        setToCurrencyShortName(country.currencies[0].code)
        setToCurrencySymbol(country.currencies[0].symbol)
        setToCountryFlag(country.flag)
        setToCurrencyFullName(country.currencies[0].name)
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
      setLoading(true)
      const currenciesResponse = await axios.get('https://api.frankfurter.app/currencies')
      const currenciesData = await currenciesResponse.data
      const countriesResponse = await axios.get('https://restcountries.eu/rest/v2/all')
      const countriesData: Countries[] = await countriesResponse.data
      const filteredCountriesData = countriesData.filter(country => {
        const { currencies: [{ code }]} = country
        return currenciesData[code]
      })
      setCountries(filteredCountriesData)
      setFromCountryOption(filteredCountriesData[100].name)
      setFromCurrencySymbol(filteredCountriesData[100].currencies[0].symbol)
      setFromCurrencyShortName(filteredCountriesData[100].currencies[0].code)
      setFromCountryFlag(filteredCountriesData[100].flag)
      setFromCurrencyFullName(filteredCountriesData[100].currencies[0].name)
  
      setToCountryOption(filteredCountriesData[79].name)
      setToCurrencySymbol(filteredCountriesData[79].currencies[0].symbol)
      setToCurrencyShortName(filteredCountriesData[79].currencies[0].code)
      setToCountryFlag(filteredCountriesData[79].flag)
      setToCurrencyFullName(filteredCountriesData[79].currencies[0].name)

      const baseCurrencyResponse = await axios.get(`https://api.frankfurter.app/latest?from=USD`)
      const baseCurrencyResponceData = await baseCurrencyResponse.data.rates
      const filteredBaseCurrency = Object.keys(baseCurrencyResponceData)[26]
      setExchangeRate(baseCurrencyResponceData[filteredBaseCurrency])
      setLoading(false)
    } catch (err) {
      setError(err.message)
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
    } catch(err) {
      setError(err.message)
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
