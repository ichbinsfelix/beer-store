import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51ItIc6IMV2LKxh6JimkhSr4a186LSp15J9I19Xrofk1ILN3qyY0AvniSiPnXwQBQvyXU3h0cTRKVUAm43lvlkvfz00QlrrAUav'

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
