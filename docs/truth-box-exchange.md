---
title: Truth Box Trading Mechanism & Roles
description: Understand the key participants, permission systems, and transaction lifecycle within the ecosystem.
sidebar:
  order: 11
---

# Trading Mechanism & Roles

Truth Box Market ecosystem relies on the collaborative game theory of multiple roles. To ensure the system's decentralization and censorship resistance, we have designed a refined permission separation and incentive mechanism.

## 1. Key Ecosystem Roles

- **Minter**: Truth Box creator, i.e., the whistleblower.
- **Seller**: Other users acting as agents to sell the Box.
- **Buyer**: The user who pays to purchase/auction the Truth Box.
- **Bidder**: The user who participates in an auction but fails.
- **Completer**: Other users (non-Buyer and non-Minter) acting as agents to execute order completion.
- **DAO**: The highest authority entity for governance, parameter adjustment, blacklist processing, and transaction dispute arbitration.

---

## 2. Permissions and State Transitions

The smart contract strictly restricts the operational permissions of each role through a state machine.

![Roles and Permissions](/docs/roles-permission.svg)

### Key Operation Permissions Table

| Action              | Executor (Role)           | Pre-condition                         | Description                                                                                                                 |
| :------------------ | :------------------------ | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| **Extend Deadline** | **Minter**                | Within protection period window       | Minter can extend exclusive control over their asset.                                                                       |
| **Sell / Auction**  | **Minter** / **Seller**   | Asset in Storing state                | If expired, Keeper (Seller) can step in to list the order.                                                                  |
| **Buy / Bid**       | **Buyer** / **Bidder**    | Asset in Selling/Auctioning           | Must pay sufficient tokens.                                                                                                 |
| **Request Refund**  | **Buyer**                 | During inspection period (Paid state) | Can apply for refund arbitration.                                                                                           |
| **Refund Decision** | **Minter** / **DAO**      | Asset in Refunding state              | Minter can voluntarily refund; disputes are judged by the DAO.                                                              |
| **Complete Order**  | **Buyer** / **Completer** | Past refund period                    | Confirms transaction completion, releases funds, Helper gets rewarded.                                                      |
| **Pay Premium**     | **Buyer**                 | Asset in Delaying state               | Pays **Delay Premium** to maintain confidential state.                                                                      |
| **Publish**         | **Minter** / **Buyer**    | Depending on state                    | Minter can publish at any time; Buyer can publish during the confidentiality period; Automatically published if in arrears. |

![Transaction Process](/docs/exchange-process.svg)

---

## 3. Data Access Control (Privacy Access Control)

> Reiteration: The Truth Box trades access permissions, not the Box itself like an NFT.

| Asset Status           | Access Granted | Description                                                                                                   |
| :--------------------- | :------------- | :------------------------------------------------------------------------------------------------------------ |
| **Storing**            | **Minter**     | Asset not yet listed, visible only to creator.                                                                |
| **Selling/Auctioning** | **Minter**     | Transaction not reached, remains confidential.                                                                |
| **Paid**               | **Buyer**      | Buyer gains access to verify authenticity.                                                                    |
| **Refunding**          | **Everyone**   | Requires specific authorized parties to intervene in arbitration (Note: Depends on DAO governance mechanism). |
| **Delaying**           | **Buyer**      | Buyer pays for exclusive access permissions.                                                                  |
| **Published**          | **Everyone**   | Truth enters public domain, anyone can decrypt.                                                               |
