---
title: Privacy Ecosystem Dilemma and Cross-Chain Exploration
description: Exploring the infrastructure challenges faced by the current Oasis Sapphire privacy ecosystem and Wiki Truth's response strategies.
sidebar:
  order: 22
---

# Privacy Ecosystem Dilemma and Cross-Chain Exploration

Wiki Truth's core mechanisms (such as TEE encryption/decryption of evidence, EIP-712 anonymous relayer execution, and privacy token settlement) are heavily dependent on the EVM-compatible privacy computing capabilities provided by **Oasis Sapphire**.

However, while enjoying its powerful security and privacy features, we must also honestly face the early stage of the current privacy public chain track and the resulting infrastructure dilemmas.

---

## 1. Current Status and Dilemmas of Privacy Public Chains

Although Oasis Sapphire has achieved a breakthrough at the technical base layer, there are still obvious shortcomings at the ecosystem application layer:

### Lack of a Truly Complete Privacy Token Ecosystem
The current EVM ecosystem is accustomed to fully transparent ERC-20 and ERC-721 standards. Although the community is advancing token standards that support confidential balances like `ERC20Secret` or `ERC1363`, these standards **have not yet formed a broad market consensus**. This means that once a user's funds enter a purely private state, their on-chain use cases and compatibility are greatly reduced.

### Lack of Prosperous DeFi Infrastructure and Liquidity
A complete Web3 commercial closed loop cannot do without the deep liquidity support of DEXs (Decentralized Exchanges), lending protocols, and mainstream stablecoins (such as USDT/USDC).
Currently, the native DeFi infrastructure on the Oasis chain is relatively weak, lacking sufficiently deep liquidity pools. This leads to:
- After whistleblowers receive `$WTRC.Privacy` bounties, it is difficult to swap them into stablecoins on the local chain with extremely low slippage.
- When external buyers want to purchase a Truth Box, they also face the cumbersome barrier of cross-chain bridging fiat or mainstream cryptocurrencies to Oasis and purchasing dedicated tokens.

---

## 2. Wiki Truth's Cross-Chain Breakthrough Strategy

In response to the above dilemmas, the Wiki Truth team has formulated a technical roadmap of **"Adhering to the privacy foundation, embracing omnichain liquidity"**.

### Separation of Privacy Execution Layer and Liquidity Layer
We believe that **absolute privacy** and **abundant liquidity** are difficult to achieve simultaneously on a single chain at this stage. Therefore, our architectural design strips these two apart:
- **Execution Layer (Must be on Oasis Sapphire)**: The minting of Truth Boxes, state machine transitions, key releases, and the final step of anonymous intelligence settlement—these life-and-death logics must be executed on the TEE privacy chain.
- **Liquidity Layer (Distributed across mainstream EVM public chains)**: The main trading of the `$WTRC` token, liquidity mining, and stablecoin swap pools will be deployed on high-liquidity networks such as Ethereum, Arbitrum, or BSC.

### Actively Exploring Cross-Chain Bridging Solutions
To connect these two layers, we are actively exploring and testing deep integrations with mainstream cross-chain protocols (such as Celer cBridge, LayerZero, etc.) as well as the official Oasis bridge.

**Our future Omnichain experience vision is:**
1. A user holds ordinary USDT or `$WTRC` on Arbitrum.
2. When the user needs to purchase a blind box or post a bounty on Wiki Truth, they can stealthily bridge and wrap their funds via cross-chain routing with one click to Oasis Sapphire, converting them into the privacy token `$WTRC.Privacy`.
3. When whistleblowers complete tasks and receive privacy bounties, they can similarly use a cross-chain bridge to "wash out" the funds and swap them back into anonymous addresses on other chains, thereby seamlessly plugging into the prosperous external DeFi world for monetization.

### Conclusion

Rome wasn't built in a day. The rigid demand for privacy protection versus the lack of DeFi liquidity is a painful period currently faced by all privacy projects. Under the premise of holding the line on whistleblower security, Wiki Truth will gradually break down ecosystem silos for users through the integration of cross-chain technologies, providing a smoother trading experience.
