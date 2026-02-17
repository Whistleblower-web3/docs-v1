---
title: Smart Contract Architecture
description: Modular contracts on Sapphire, upgrades, and Mainnet/Testnet placeholder information.
sidebar:
  order: 5
---

### Smart Contract Architecture

WikiTruth uses modular smart contracts deployed on **Oasis Sapphire** (EVM-compatible privacy public chain). Confidential data is stored on-chain in encrypted form and permissions are verified via SIWE tokens.

> In the testnet, core contracts support Proxy upgrades, allowing business logic upgrades without changing addresses and data. Mainnet contracts are immutable contracts.

**Core Modules**

- `AddressManager.sol`: Unifies management of core contract addresses, DAO, supported tokens, and DEX whitelists.
- `SiweAuthWikiTruth.sol`: SIWE identity authentication, supporting multi-domain verification, adapted for Sapphire zero-address scenarios.
- `UserId.sol`: User ID/Blacklist management, used as contract event log parameters to protect on-chain identity privacy.
- `TruthBox.sol`: Core asset contract, managing state machine, pricing, and deadlines, using Sapphire TEE to store confidential data encrypted.
- `TruthNFT.sol`: ERC-721 standard NFT contract, a byproduct of creating a Truth Box, used to implement the display circulation and cross-chain capability of this project in the NFT market, enhancing the influence of the WikiTruth ecosystem.
- `Exchange.sol`: Trading engine, handling the full flow of Sell/Auction/Buy/Bid/Refund/Complete.
- `FundManager.sol`: Fund custody and allocation, responsible for multi-currency payment, automatic exchange (DEX interaction), and revenue distribution.

#### Network and Contract Deployment (Mainnet/Testnet)

| Item | Mainnet | Testnet |
| --- | --- | --- |
| Network Name | Oasis Sapphire | Oasis Sapphire Testnet |
| Chain ID | 23294 | 23295 |
| Block Explorer | TBD | [Oasis Sapphire Testnet explorer](https://explorer.oasis.io/testnet/sapphire/address/) |
| AddressManager | TBD | 0x7609F2617c6e4A8757809dB67a7EAd55A5B33195 |
| TruthBox | TBD | 0x1aec0197b0Ddc0412393813F863382748Da5C01e |
| Exchange | TBD | 0xFD4C4CFA8B1dF3aF3F7a07A630B2FbBa6b45b40d |
| FundManager | TBD | 0x28FE0c45e9730a89ABDdD4DC817b532F802Fe1E3 |
| TruthNFT | TBD | 0x4994C64ABC6A7BAE72C3b58133F8AAAB4dF1CbE7 |
| UserId | TBD | 0xB1F04fB48490F3B37D5FEe3731c140dbF2224F5e |
| SiweAuth | TBD | 0x6547F0a925BD522F029D0aFEC3A239aCDcE0122a |
