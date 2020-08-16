# Stripe connect Payment request button issue

## How this repo was created

1. `npx create-react-app stripe-connect-prb-repro --template typescript`
2. `npm install @stripe/react-stripe-js`
3. `npm install @stripe/stripe-js`
4. Create an `.env.local` with
```
// .env.local

REACT_APP_PUBLISHABLE_KEY=pk_test...
REACT_APP_CONNECTED_ACCOUNT=acct_...
```
5. Created App.tsx, Example.tsx, ExampleWithConnect.tsx, Checkout.tsx

## Steps to reproduce

1. Create `.env.local` with suitable values from stripe
2. `npm install`
3. `npm run start`
4. `ngrok http 3000 --host-header localhost`
5. Register ngrok https URL in stripe dashboard (of main account)
6. Register ngrok https URL in stripe dashboard (of connected account)
7. Visit ngrok URL in desktop safari with an apple pay card registered
8. Observe that the Apple pay button appears for the Example, but not Example with connect.
9. Observe that the following error is present in the browser console
```
Either you do not have a card saved to your Wallet or the current domain (xxxxxx.ngrok.io) or stripeAccount parameter (acct_xxxxxxxx) is not registered for Apple Pay
```