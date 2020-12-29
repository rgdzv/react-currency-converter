import React, { memo } from 'react'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <hr/>
      <p>
        Currency converter is an app for showing relevant currency rates from <a href="https://www.frankfurter.app">Frankfurter API</a><br/>This project was created by <a href="https://github.com/rgdzv">Ramis Gadzhiomarov</a><br/> You can find code source <a href="https://github.com/rgdzv/react-currency-converter">here</a> 
      </p>
    </div>
  )
}

export default memo(Footer)
