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

## Existing Code

In this scenario, imagine that the entire backend has been built out (in this case we're not going to do any real API calls for simplicity). In addition, a fair number of components have already been created for you. Your focus will be on wiring everything together.

## Let's Do This

- `yarn install`
- `yarn start`
- Open `App.tsx`
