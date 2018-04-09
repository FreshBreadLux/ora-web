import React from 'react'
import { connect } from 'react-redux'
import Footer from './footer'

const Home = () => (
  <div className="homeBackgroundImage">
    <div className="mainHomeDiv">
      <p className="raleway font100 centerText paddingHalfem">ORA</p>
      <div className="homeScriptureDiv">
        <p className="homeScriptureQuote">"I am troubled now. Yet what should I say?<br />Father, save me from this hour'?<br />But it was for this purpose that I came to this hour.<br />Father, glorify your name."<br />- John 12:27-28</p>
      </div>
    </div>
    <Footer />
  </div>
)

export default connect()(Home)
