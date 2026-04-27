---
title: Truth Box State Mechanism
description: Truth Box lifecycle states, parameter comparison, and timeout rules.
sidebar:
  order: 9
---

### Detailed Explanation of the Truth Box State Machine

```solidity
enum Status(
  Storing,
  Selling,
  Auctioning,
  Paid,
  Refunding,
  Delaying,
  Published,
  Blacklisted
)
```

A Truth Box will go through the following states, all strictly defined by the contract:

1. **Storing**: The initial state after minting via the `create` method.
2. **Selling**: Listed for sale at a fixed price.
3. **Auctioning**: In an auction, each bid extends the deadline.
4. **Paid**: The buyer has paid, entering the refund application period.
5. **Refunding**: Refund arbitration period, Minter/DAO can process the refund.
6. **Delaying**: Enters the delayed disclosure period after transaction completion, can be extended by paying time fees.
7. **Published**: Content is public, anyone can read the confidential data.
8. **Blacklisted**: DAO banned state, trading is frozen, triggering a refund/burn.

### State Flowchart

![State Flowchart](/docs/status-process.svg)

1. Upon minting, you can choose to Store (default) or Publish directly.
2. Only Boxes in the Storing state can be Sold or Auctioned.
3. If no one buys during Selling/Auctioning, it automatically changes to Published when the deadline expires.
4. In the Selling state, if a buyer purchases it, it enters Paid; in the Auctioning state, it waits for the deadline to expire before turning to Paid.
5. In the Paid state, if the buyer applies for a refund, it enters Refunding, or if the order is completed, it enters Delaying.
6. The Delaying state is what we call the delayed disclosure state. This state requires continuous payment of delay fees.
7. If the delay fee is not paid, it automatically turns to Published when the deadline expires.

### State Durations

![State Durations](/docs/status-period.svg)

1. Storing: Initial 365 days; extensions can only be performed within 30 days before expiration, up to a maximum of 365 days per extension.
2. Selling: Fixed 365-day listing period.
3. Auctioning: Initial 30 days; resets to 30 days with each new bid.
4. Request Refund Period: Default 7 days; cannot apply if it times out.
5. Refund Review Period: Default 30 days; anyone can execute the refund approval after the timeout.
6. Delaying: Initial 365 days; each time fee payment can extend it by 365 days.

#### Mainnet/Testnet Comparison

| Parameter | Oasis Sapphire | Oasis Sapphire Testnet |
| --- | --- | --- |
| Storing Initial Protection Period | 365 days | 15 days |
| Extendable Window | Within 30 days | Within 3 days |
| Single Extension Limit | 365 days | 15 days |
| Selling | 365 days | 15 days |
| Auctioning | 30 days | 3 days |
| Delaying | 365 days | 15 days |
| Request Refund Period | 7–15 days | 7 days |
| Refund Review Period | 15–60 days | 15 days |

> Some parameters can be adjusted through DAO governance.
