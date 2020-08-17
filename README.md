# Stripe connect Payment request button issue

## How this repo was created

1. `npx create-react-app stripe-connect-prb-repro --template typescript`
2. `npm install @stripe/react-stripe-js`
3. `npm install @stripe/stripe-js`
4. Create an `.env.local` with
```
// .env.local

REACT_APP_PUBLISHABLE_KEY=pk_test...
REACT_APP_SECRET_KEY=sk_test...
REACT_APP_PUBLISHABLE_KEY_PROD=pk_live...
REACT_APP_SECRET_KEY_PROD=sk_live...
REACT_APP_CONNECTED_ACCOUNT=acct_...
```
5. Created App.tsx, Example.tsx, ExampleWithConnect.tsx, Checkout.tsx
6. Created `register_domains.sh`

## Steps to reproduce

1. Create `.env.local` with suitable values from stripe
2. `npm install`
3. `npm run start`
4. `ngrok http 3000 --host-header localhost`
5. Register ngrok https URL in stripe dashboard [here](https://dashboard.stripe.com/settings/payments/apple_pay) (of main account) in both production and test mode
6. Register ngrok https URL in stripe dashboard [here](https://dashboard.stripe.com/settings/payments/apple_pay) (of connected account) in both production and test mode
7. `source .env.local`
8. Execute `./register_domains.sh <ngrok_dns_name> $REACT_APP_CONNECTED_ACCOUNT $REACT_APP_SECRET_KEY`
9. Execute `./register_domains.sh <ngrok_dns_name> $REACT_APP_CONNECTED_ACCOUNT $REACT_APP_SECRET_KEY_PROD`
10. Visit ngrok URL in desktop safari with an apple pay card registered
11. Observe that the Apple pay button appears for the Example, but not Example with connect.
12. Observe that the following error is present in the browser console
```
Either you do not have a card saved to your Wallet or the current domain (xxxxxx.ngrok.io) or stripeAccount parameter (acct_xxxxxxxx) is not registered for Apple Pay
```

**NOTE: In Chrome, the button renders for the connect example, but not the example**