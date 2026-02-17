---
title: Rewards & Game Costs
description: Understand WikiTruth's automated bounty distribution mechanism and the Delayed Disclosure Premium model.
sidebar:
  order: 12
---

# Rewards & Game Costs

WikiTruth's economic model aims to balance **whistleblower incentives**, **community participation motivation**, and **platform sustainability**. All fund flows are automatically executed by smart contracts, ensuring transparency, fairness, and immutability.

![Rewards Allocation](/docs/rewards-allocation.svg)

## 1. Transaction Bounty Allocation

When a Truth Box is successfully circulated (purchased) in the market, the transaction amount is automatically distributed according to the following proportions. This not only rewards the provider of the truth but also incentivizes third-party participants who maintain market order.

- **Minter Reward**: The evidence provider receives the majority of the transaction amount (minus Helper rewards). If there is no Helper, it all goes to the Minter.
- **Helper Reward**: Eligible agent executors (Seller/Completer) can each receive 1% of the transaction amount.
- **Platform Service Fee**: 3% is charged on successful transactions to the DAO treasury, supporting DAO governance and project development.

SEC and other agencies generally award whistleblowers 10%-15% of the collected sanctions, but WikiTruth's reward mechanism distributes the vast majority of the proceeds to the minter (whistleblower).

## 2. Delayed Disclosure Premium

WikiTruth introduces a unique "financialized time game mechanism". The Buyer can pay fees to maintain the Delayed Disclosure status (Delayed) of the Truth Box. We call this fee the **Delayed Disclosure Premium**.

### Delayed Fee Growth Curve

![Delayed Fee Growth Curve](/docs/delayed-fee-curve.svg)

To prevent truth from being covered up forever, the protocol has a built-in **increasing premium function**.

- **Increasing Stage**: As time goes by, the cost required to maintain "Delayed Disclosure" will grow exponentially or by linear multiples.
- **Final Disclosure**: When **the cost of covering up the truth > the cost of solving the problem**, rational stakeholders will stop paying, and the truth will immediately be disclosed to the public.

This mechanism builds a mathematical inevitability: **the truth will eventually come out**. It forces the Buyer to face the problem directly through economic leverage, rather than delaying indefinitely, instead of relying on moral preaching.

> The specific rate growth coefficient and cycle are decided by the DAO community through governance contract voting and can be dynamically adjusted based on market feedback.

### Core Philosophy: Irreversible Justice

This is a **time-based game machine**:

- **Truth Will Eventually Come Out**: By algorithmically raising the cost of concealment, the truth is either "bought" at a high price to buy time, or disclosed for free. Regardless of the outcome, the contributor will receive benefits, and justice will be served.
