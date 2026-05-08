---
title: Token
description: Evidence Market's EMC token value capture, and fund flow allocation.
sidebar:
  order: 15
---

## 1. Token Utility

`EMC` (Evidence Market Coin) is the native token of the ecosystem and possesses the following core utilities:

1. **Medium of Exchange**:
   - The basic settlement currency for purchasing Evidence Box access rights.
   - Paying the exponentially increasing "Delay Premium".
   - The underlying asset locked when publishing Bounty tasks.

2. **Privacy Gas & Anonymous Transfer**:
   - Combined with the Oasis Sapphire privacy network and EIP-712 standard, `EMC` can be wrapped into the privacy token `EMC.Privacy`, enabling fully anonymous on-chain payments and ensuring the whistleblower's fund flow is untraceable.

3. **Staking for Security**:
   - Bounty publishers must stake a certain amount of `EMC` to prevent publishing malicious or fake tasks.
   - Node validators (Helpers) must stake tokens to capture liquidation rewards in the network.

4. **Governance**:
   - Members holding `EMC` can participate in DAO voting to determine core protocol parameters (e.g., platform transaction cut ratio, delay fee growth curve coefficient, blacklist dispute arbitration, etc.).

> For the deployed contract address, please refer to [Project Token](/docs/privacy-token).

## 2. Platform Token Flow and Value Capture

All transaction fees generated within the Evidence Market system will be trustlessly distributed through smart contracts:

- **Whistleblower (Minter)**: Obtains the vast majority of core revenue (typically **95% - 97%** of the total transaction volume).
- **Auxiliary Traders (Helpers)**: Users who assist in executing on-chain state changes (such as timeout liquidation, auxiliary listing, etc.) will receive an operational incentive of approximately **1% - 2%**.
- **DAO Treasury**: For every successful circulation transaction, a fixed service fee (set at **3%** on the testnet) will be charged to the DAO Treasury.
  - **Buyback Mechanism**: A portion of the treasury funds will be used to **buy back and burn** `EMC` on the secondary market, giving the token deflationary properties.
  - **Ecosystem Feedback**: The remainder is used to replenish the senseless Gas pool for new users and provided to protocol security audit teams.

---

## 3. Token Distribution Structure

> 💡 **Note: The token distribution plan will not be launched for now and will be announced at an appropriate time, but we will provide certain airdrops as rewards to early participants.**
