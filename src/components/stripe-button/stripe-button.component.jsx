import react from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publicKey = 'pk_test_51JHoEoEIdwdA9zCe4Volqov8LWQWoh7TrjZiTGXQLdoFC9eCxxT3IEFCjweXzxZClJdvFZUGiTpdoMN7Zyc6aCzN0046JgJxuj';
   const  onToken = token => {
        alert('payment was successful')
    }

    return (
        <StripeCheckout
        label="Pay now" 
        name="CRWN clothing"
        billingAddress
        shippingAddress
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publicKey}

    />

    )
   
}

export default StripeButton