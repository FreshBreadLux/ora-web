import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { StripeProvider } from 'react-stripe-elements'
import history from './history'
import store from './store'
import App from './app'
import { STRIPE_API_KEY } from './config'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <StripeProvider apiKey={STRIPE_API_KEY}>
        <App />
      </StripeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
)
