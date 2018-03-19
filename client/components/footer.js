import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className="displayFlex flexColumn flexAlignCenter padding1em">
    <p className="raleway bottomMargin1em">ORA PRAYER NETWORK | LET TECH SERVE FAITH</p>
    <Link className="raleway font12" to="/privacy-policy">Privacy Policy</Link>
  </div>
)

export default connect()(Footer)
