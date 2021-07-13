# Tech Spec

## Background

Ramp handles thousands of transactions every single day. Financial teams need visibility into the purchases that are happening inside their organization without having to have someone comb through every single transaction.

This is why we are now building Ramp Alerts (TM).

With Ramp Alerts, finance teams can decide what types of transactions will automatically send an email to them.

## Structure

A Ramp Alert has two components: `transaction_amount_threshold` and `alert_rules`.

`transaction_amount_threshold` is the minimum transaction size to trigger the alert.

`alert_rules` is a collection of objects that define under which conditions an alert is triggered. In this case, we use three classes of conditions:

1. department (e.g. sales, engineering, business)
2. merchant (e.g. Facebook Ads, Amazon, Apple)
3. category (e.g. SaaS, Travel, Electronics)

So for example, an alert could be created that sends an email if someone in the engineering department spends over $1,000 on travel.

## Designs

Take a look at `designs/` to see how the finished website should look. Focus on functionality first!

## Let's Do This

- clone the repo
- `yarn install`
- `yarn start`
- Open `src/App.tsx`
- Make the form functionality match the designs
