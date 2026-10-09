import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <span>Made slowly, with curiosity.</span>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </footer>
  )
}
