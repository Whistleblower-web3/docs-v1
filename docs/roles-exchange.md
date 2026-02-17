---
title: Roles & Exchange Mechanisms
description: Understand the key participants, permission systems, and transaction lifecycles in the ecosystem.
sidebar:
  order: 11
---

# Roles & Exchange Mechanisms

WikiTruth's ecosystem relies on the collaborative game of multiple roles. To ensure the system's decentralization and censorship resistance, we have designed a refined permission separation and incentive mechanism.

## 1. Key Roles in the Ecosystem

- **Minter**: Truth Box creator, i.e., the whistleblower.
- **Seller**: Other users who act as agents to sell the Box.
- **Buyer**: Pays to purchase/bid for the Truth Box.
- **Bidder**: Users participating in the auction.
- **Completer**: Other users who act as agents to complete the order (non-Buyer and non-Minter).
- **DAO**: The highest authority entity for governance, parameter adjustment, blacklist processing, and transaction dispute arbitration.

---

## 2. Permissions and Status Flow

Smart contracts strictly limit the operational permissions of each role through a state machine.

![Roles and Permissions](/docs/roles-permission.svg)

### Key Operation Permissions Table

| Action                           | Role                      | Pre-condition               | Description                                                                 |
| :------------------------------- | :------------------------ | :-------------------------- | :-------------------------------------------------------------------------- |
| **Extend Deadline**              | **Minter**                | Within protection window    | Minter can extend their exclusive control over the asset.                   |
| **Sell / Auction**               | **Minter** / **Seller**   | Asset in Storing status     | If expired, Keeper (Seller) can intervene to list the order.                |
| **Buy / Bid**                    | **Buyer** / **Bidder**    | Asset in Selling/Auctioning | Sufficient tokens must be paid.                                             |
| **Request Refund**               | **Buyer**                 | Within inspection (Paid)    | Can apply for refund arbitration.                                           |
| **Refund Decision**              | **Minter** / **DAO**      | Asset in Refunding status   | Minter can refund voluntarily; disputes are decided by DAO.                 |
| **Complete Order**               | **Buyer** / **Completer** | After refund period         | Confirm transaction completion, funds released, Helper gets reward.         |
| **Pay Premium**                  | **Buyer**                 | Asset in Delaying status    | Pay **Delayed Disclosure Premium** to maintain confidentiality status.      |
| **Publish**                      | **Minter** / **Buyer**    | Depends on status           | Minter can publish anytime; Buyer can publish during secrecy; auto-publish if fee unpaid. |

![Exchange Process](/docs/exchange-process.svg)

---

## 3. Privacy Access Control

Based on Oasis Sapphire's TEE privacy features, confidential data in the Truth Box (such as decryption private keys) is only open to the legitimate holder under the current status.

| Asset Status                  | Access Granted              | Description                                        |
| :---------------------------- | :-------------------------- | :------------------------------------------------- |
| **Storing**                   | **Minter**                  | Asset not yet listed, visible only to creator.     |
| **Selling/Auctioning**        | **Minter**                  | Transaction not reached, remains confidential.     |
| **Paid**                      | **Buyer**                   | Buyer gains access rights to verify authenticity.  |
| **Refunding**                 | **Everyone**                | Requires specific permissions to intervene in arbitration (Note: Depends on DAO governance mechanism). |
| **Delaying**                  | **Buyer**                   | Buyer pays for exclusive access rights.            |
| **Published**                 | **Everyone**                | Truth enters the public domain, anyone can decrypt.|
