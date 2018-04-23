import React from 'react'
import { FormInputPresenter } from '../'

const FormPaymentPresenter = ({ firstName, lastName, email, password, address, city, state, handleInputChange, checkEmail, checkEmailReturned, userExists, stripeCustomerExists, setInputRef, setFirstNameRef }) => {
  console.log('in FormPaymentPresenter, setFirstNameRef: ', setFirstNameRef)
  return (
  <div>
    <p className="stripeFormSectionHeader">PAYMENT INFORMATION</p>
    <div className="paymentInfoDiv">
      <div className="displayFlex">
        <div className="widthPercent50">
          <FormInputPresenter
            type="text"
            inputMode="text"
            name="firstName"
            value={firstName}
            inputRef={ref => {
              console.log('ref: ', ref)
              setFirstNameRef(ref)
            }}
            label="First Name"
            onChange={handleInputChange}
            notEmpty={!!firstName.length} />
        </div>
        <div className="widthPercent50">
          <FormInputPresenter
            type="text"
            inputMode="text"
            name="lastName"
            value={lastName}
            ref={ref => setInputRef('lastName', ref)}
            label="Last Name"
            onChange={handleInputChange}
            notEmpty={!!lastName.length} />
        </div>
      </div>
      <FormInputPresenter
        type="email"
        inputMode="email"
        name="email"
        value={email}
        ref={ref => setInputRef('email', ref)}
        label="Email"
        onBlur={checkEmail}
        onChange={handleInputChange}
        notEmpty={!!email.length} />
      <div className={checkEmailReturned && userExists && stripeCustomerExists ? 'revealedEmailMessageDiv' : 'hiddenEmailMessageDiv'}>
        <p className="raleway greyText font12 bottomMargin1em">You already have a donation profile. Use My Donations to manage your support</p>
      </div>
      <div className={checkEmailReturned && !stripeCustomerExists ? 'revealedEmailMessageDiv' : 'hiddenEmailMessageDiv'}>
        <p className="raleway greenText font12 bottomMargin1em">
          {!userExists
          ? `Welcome! You'll need to set a password to use in the Ora app and to manage your donations`
          : `Welcome back! Please verify your account using the same password that you used for the Ora app`
          }
        </p>
        <FormInputPresenter
          type="password"
          inputMode="password"
          name="password"
          value={password}
          ref={ref => setInputRef('password', ref)}
          label="Password"
          onChange={handleInputChange}
          notEmpty={!!password.length} />
      </div>
      <FormInputPresenter
        type="text"
        inputMode="text"
        name="address"
        value={address}
        ref={ref => setInputRef('address', ref)}
        label="Address"
        onChange={handleInputChange}
        notEmpty={!!address.length} />
      <div className="displayFlex">
        <div className="widthPercent50">
          <FormInputPresenter
            type="text"
            inputMode="text"
            name="city"
            value={city}
            ref={ref => setInputRef('city', ref)}
            label="City"
            onChange={handleInputChange}
            notEmpty={!!city.length} />
        </div>
        <div className="widthPercent50">
          <FormInputPresenter
            type="text"
            inputMode="text"
            name="state"
            value={state}
            ref={ref => setInputRef('state', ref)}
            label="State"
            onChange={handleInputChange}
            notEmpty={!!state.length} />
        </div>
      </div>
    </div>
  </div>
)}

export default FormPaymentPresenter
