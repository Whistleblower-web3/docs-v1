---
title: Privacy Payment
description: Evidence Market uses privacy tokens for payments to protect user privacy.
sidebar:
  order: 6
---

We currently plan two main payment methods:

## 1. Smart Contract-Based .Privacy Tokens

The first payment solution uses `.Privacy` series tokens built on Oasis Sapphire privacy smart contracts (for example, wrapping native EMC or other tokens into a privacy version). For technical implementation details of this token, please refer to the [Privacy Token](./privacy-token.md) documentation.

### 1.1 Limitations of Privacy (Cold Start Period Risks)

It is crucial to clarify a concept: **Privacy ≠ Encryption, True Privacy = Anonymity Set.**

Although `.Privacy` tokens achieve **Confidentiality** at the technical level, hiding balances and transfer details, "privacy coins" themselves do not automatically generate strong **Anonymity**. True anonymity relies on:

- A large user base
- A unified deep liquidity pool
- High-frequency fund mixing behaviors
- Indistinguishable transaction patterns

During the project's **cold start phase**, due to insufficient users and transaction frequency, a large enough "anonymity set" cannot be formed. This means that the flow of funds may still be tracked and correlated through on-chain deposit and withdrawal time differences, address activity, and other behaviors, significantly compromising privacy.

> **⚠️ Core Recommendation**: In the early stages of the project, we **strongly discourage** users from using this token for high-risk core payment operations or operations requiring extremely high anonymity (such as buying out evidence blind boxes).

### 1.2 Why still support it for paying "Delay Fees"?

Since direct use of this token for payment carries a significant risk of traceability, why does the platform still allow buyers to use it to pay the **Delay Premium**?

This stems from the core value game design of Evidence Market: **Our fundamental proposition is to let the truth be exposed as soon as possible.**

Our original intention in establishing the delay fee mechanism was to "extract" funds from wrongdoers through economic pressure, rather than providing them with a perfect cover-up tool. In principle, we **do not encourage at all** anyone to prolong the time before evidence is disclosed. If the wrongdoer insists on trying to cover up the truth and paying the delay fee, they must bear the risk of identity exposure and fund tracking that may arise from using `.Privacy` tokens themselves. This is not only a game-theoretic punishment for their cover-up behavior but also perfectly aligns with our ultimate goal of accelerating evidence disclosure.
