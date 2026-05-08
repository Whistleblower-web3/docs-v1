---
title: Smart Contract Architecture
description: Modular contracts on Sapphire, upgrades, and Mainnet/Testnet placeholder information.
sidebar:
  order: 5
---

Evidence Market uses modular smart contracts deployed on **Oasis Sapphire** (an EVM-compatible privacy public chain). Confidential data is stored on-chain in encrypted form, and permissions are verified via SIWE tokens.

### Base Modules

- `AddressManager.sol`: Uniformly manages core contract addresses, DAOs, supported tokens, and DEX whitelists.

- `SiweAuth.sol`: SIWE identity authentication, supporting multi-domain verification and adapting to Sapphire zero-address scenarios.

- `UserManager.sol`: Generate user IDs and manage blacklists for users, replacing addresses as contract event log parameters to protect on-chain identity privacy. [Read more](/docs/user-privacy).

- `Forwarder.sol`: Implements `ERC2771` standard meta transactions, supports gasless payment interactions, and ensures that user addresses do not directly interact with the contract.

### Evidence Box Market

- `EvidenceBox.sol`: The core asset contract, managing the state machine, pricing, and deadlines, using Sapphire TEE to store confidential data encryptedly.

- `Exchange.sol`: The trading engine, handling the full process of Sell/Auction/Buy/Bid/Refund/Complete.

- `FundManager.sol`: Fund custody and distribution, responsible for multi-currency payments, automatic exchange (DEX interaction), and yield distribution.

### Bounty Market

> The Bounty Market is still under development and has not been deployed to the testnet.

#### Network and Contract Deployment (Mainnet/Testnet)

| Project        | Mainnet        | Testnet                                                                                |
| -------------- | -------------- | -------------------------------------------------------------------------------------- |
| Network Name   | Oasis Sapphire | Oasis Sapphire Testnet                                                                 |
| Chain ID       | 23294          | 23295                                                                                  |
| Block Explorer | TBD            | [Oasis Sapphire Testnet explorer](https://explorer.oasis.io/testnet/sapphire/address/) |
| AddressManager | TBD            | 0x268863DAeaAdcB45aBb010402600Dea7C0a04744                                             |
| EvidenceBox    | TBD            | 0x8Db771373077225aEb5Af7DFCa9ba33185ba0dB3                                             |
| Exchange       | TBD            | 0x0499bd1974FF382A49D0008b413422518E71e06d                                             |
| FundManager    | TBD            | 0x154f826356776a75B748373aDD310a5BB449a268                                             |
| UserManager    | TBD            | 0xeeF1c5Fd9bf0dFc8fD47D57c56B2ec9f52811CB2                                             |
| SiweAuth       | TBD            | 0x6547F0a925BD522F029D0aFEC3A239aCDcE0122a                                             |
| Forwarder      | TBD            | 0x6553408789c9ca50FDCa0E3120245674F4C529ad                                             |
