#!/bin/sh

curl https://api.stripe.com/v1/apple_pay/domains \
  -u $3: \
  -H "Stripe-Account: $2" \
  -d domain_name="$1"

curl https://api.stripe.com/v1/apple_pay/domains \
  -u $3: \
  -d domain_name="$1"