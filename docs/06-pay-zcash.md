---
title: Privacy Payment (Zcash)
description: Evidence Market uses privacy tokens for payments to protect user privacy.
sidebar:
  order: 6
---

## 2. Zcash-based Anonymous Payment and Private Execution Architecture

After evaluating various cross-chain and privacy payment solutions, we adopted the architecture of **"Unified Shielded Collection Pool + Off-chain Order Matching"**. This solution avoids over-engineering (such as introducing NEAR Intents) and achieves **"anonymous payment-driven private contract execution"** in the simplest and most efficient way.

## Core Operational Workflow

Similar to mature Web2 payment gateways (such as Stripe or Coinbase Commerce), the entire payment and execution process is as follows:

1. **Frontend Parameter Submission**: Users submit business requests and parameters on the frontend.
2. **Backend Order Generation**: The backend system generates a unique order identifier (`orderHash`) and marks the order status as "Awaiting Payment".
3. **User Anonymous Payment**: Users pay ZEC to the official unified Zcash Shielded Wallet and attach the `orderHash` in the **Memo** field of the transaction.
4. **Fund Monitoring and Matching**: The background Zcash Watcher listens to the incoming transaction records of the official wallet, and automatically and precisely matches the corresponding order by comparing the `orderHash` in the Memo.
5. **Private Contract Execution**: After the order is successfully matched, the backend service (Sapphire Relayer) calls the smart contract on Oasis Sapphire to execute the final business logic.

## Architecture Advantages

- **Minimalist Wallet Management**: It abandons the "one order, one address" model, avoiding the key management (Viewing Key), UTXO maintenance, and heavy node synchronization pressure caused by massive Zcash shielded addresses.
- **Strong Privacy Protection**: The outside world can only see funds flowing into the Zcash shielded pool on the chain, but cannot track the orders, user identities, request parameters, and final execution logic associated with the funds.
- **Mature and Scalable**: Essentially, it is a mature backend order matching system, which removes the need for complex on-chain Intent network routing and aggregation. The system is more stable and easier to scale.

## Security and Privacy Focus

Under this architecture, on-chain transaction privacy is guaranteed by the Zcash shielded pool. Therefore, the system's **core security boundary shifts to the Backend**.

Our future focus on privacy and security enhancement will be on:

- Preventing the leakage of backend databases, logs, IPs, or Payloads.
- Security hardening of the backend runtime environment (such as introducing a TEE backend execution environment).
- Optional advanced anonymity layers (such as one-time Memos, Tor access, stealth sessions, etc.).

**Summary:**
Zcash is responsible for anonymous payment settlement, the Backend is responsible for order matching and triggering, and Oasis Sapphire is responsible for private computing execution. The three perform their respective duties, constituting the most pragmatic, minimalist, and secure privacy payment infrastructure of Evidence Market.
