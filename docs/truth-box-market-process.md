---
title: Process Flow
description: An end-to-end real-world use case analysis of the Truth Box Market system, from evidence upload to final publication.
sidebar:
  order: 4
---

## How Does the System Work?

We will break down the complete lifecycle from "evidence minting" to "buyer's game" to "final publication".

In the operation of the protocol, there are three core roles involved: **Whistleblower (Minter)**, **Buyer**, and **Helpers (Seller/Completer)**.

![Simple Process](/docs/symbol-process.svg)

### 1. Truth Assetization

- **Upload**: Upload evidence files and metadata to IPFS/Arweave.
- **Mint**: Mint the **Truth Box** in the smart contract.

### 2. Market Circulation

- **Sell/Auction**: The Minter can initiate a sale or auction during the protection period.
- **Help Sell**: If it times out, anyone can assist in selling and become a Seller.

### 3. Delivery and Verification

- **Purchase**: After the Buyer pays, they gain access rights.
- **Inspection Period**: The Buyer can choose to apply for a refund or complete the order.
- **Help Complete**: If it times out, anyone can assist in completing the order and become a Completer.

### 4. Delayed Disclosure & Game

- **Delaying Status**: After the transaction is completed, the Box enters the "Delaying" state.
- **Delay Fee**: The Buyer needs to pay a **Delayed Fee** periodically.
- **Final Disclosure**: If the Buyer stops paying the delayed fee, the Box will automatically enter the "Published" state, the truth will be disclosed, and its ultimate social value will be realized.

---

## Practical SOP (Quick Start for Users)

The following process is designed to help users complete operations with the highest possible level of privacy under different networks.

### A. Mainnet SOP (Privacy First, Recommended)

1. Prepare a wallet and properly save the private key/mnemonic phrase. If you are a new user, you can use the automatically created wallet by the platform (for signature only).
2. After connecting to the mainnet, **enable proxy interaction (EIP-712 Relayer)**.
3. Before uploading evidence, complete the encryption and file shredding locally, then upload to IPFS/Arweave.
4. Use signature requests to complete operations such as minting, listing, buying, and extending, avoiding direct on-chain transactions from your wallet address.
5. Regularly check the Box status and deadlines (especially the refund period and delayed disclosure period) and execute subsequent actions as needed.

> After enabling proxy interaction on the mainnet, the wallet address will not leave direct on-chain interaction records, which is more suitable for real-world scenarios with high privacy requirements.

### B. Testnet SOP (Debugging First)

1. Use a regular Web3 wallet to connect to the testnet and interact with the contract directly.
2. Follow the complete process of creation, trading, refund, and delayed disclosure for functional verification.
3. The testnet does not enable the mainnet proxy interaction mechanism by default, making it easier for Web3 users to debug and troubleshoot.

### C. Wallet-less User SOP (For Non-Web3 Users)

1. Upon first entry, the system will automatically create an empty wallet for signing.
2. The wallet key will be saved in the browser's `localStorage`. You still need to back up and safely manage the key yourself.
3. Thanks to the low Gas fees of Oasis Sapphire, each wallet address is provided with one free minting opportunity by default for the first experience.

> Please understand: Automatically creating a wallet is a "lowering the barrier" solution, not equivalent to "custodial security". If browser data is lost without a backup, access rights may be irrecoverable.
