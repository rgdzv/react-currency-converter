import React, { memo } from 'react'
import './Header.scss'

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="header">
      <div className="header__name">{children}</div>
      <div className="header__date">{new Date().toLocaleDateString()}</div>
    </div> 
  )
}

export default memo(Header)
