import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const {theme} = useContext(ContextGlobal);
  return (
    <footer style={{background: theme.secondBackground, color: theme.color}}>
        <p>Powered by  <span> Sebastian Robayo C-7</span> </p>
    </footer>
  )
}

export default Footer
