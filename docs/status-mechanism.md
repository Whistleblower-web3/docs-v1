---
title: Status Mechanism
description: Truth Box lifecycle status, parameter comparison, and timeout rules.
sidebar:
  order: 9
---

### Truth Box State Machine Detailed

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

A Truth Box will go through the following statuses, strictly defined by the contract:

1. **Storing**: Initial status after minting via the create method.
2. **Selling**: Fixed price sale in progress.
3. **Auctioning**: Auction in progress, each bid extends the deadline.
4. **Paid**: Buyer has paid, entering the refund application period.
5. **Refunding**: Refund arbitration period, Minter/DAO can process refunds.
6. **Delaying**: Transaction completed, entering delayed disclosure period, time fees can be paid to extend.
7. **Published**: Content published, anyone can read confidential data.
8. **Blacklisted**: DAO banned status, transactions frozen and refund/burn triggered.

### Status Flowchart

![Status Flowchart](/docs/status-process.svg)

1. Can choose Store (default) or directly Publish when minting.
2. Only Boxes in Storing status can be Sold or Auctioned.
3. Selling/Auctioning will turn to Published if no one buys upon expiration;
4. If Selling has a buyer, it enters Paid; Auctioning needs to wait for the deadline to pass before turning to Paid.
5. Under Paid status, the buyer can apply for a refund entering Refunding, or complete the order entering Delaying.
6. Maintaining Delaying requires paying time fees; expires automatically to Published.

### Status Periods

![Status Periods](/docs/status-period.svg)

1. Storing: Initial 365 days, extension operations only possible within 30 days before expiration, max 365 days per time.
2. Selling: Fixed 365 days listing cycle.
3. Auctioning: Initial 30 days, resets to 30 days with each bid.
4. Request Refund Period: Default 7 days, cannot apply if timed out.
5. Refund Review Period: Default 30 days, anyone can execute agree refund after timeout.
6. Delaying: Initial 365 days, each time fee payment extends by 365 days.

#### Mainnet/Testnet Comparison

| Parameter | Oasis sapphire | Oasis sapphire testnet |
| --- | --- | --- |
| Storing Initial Protection | 365 Days | 15 Days |
| Extension Window | Within 30 Days | Within 3 Days |
| Single Extension Max | 365 Days | 15 Days |
| Selling | 365 Days | 15 Days |
| Auctioning | 30 Days | 3 Days |
| Delaying | 365 Days | 15 Days |
| Request Refund Period | 7–15 Days | 7 Days |
| Refund Review Period | 15–60 Days | 15 Days |

> Some parameters can be adjusted through DAO governance.
