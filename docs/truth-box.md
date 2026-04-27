---
title: What is a Truth Box?
description: An in-depth analysis of the core encrypted information container and access right asset in Wiki Truth.
sidebar:
  order: 1
---

## What is a Truth Box?

In the Wiki Truth system, a **Truth Box** is the fundamental asset unit of the entire passive disclosure network (Truth Box Market).

You can think of it as an **encrypted safe with a smart time lock**. After a whistleblower places confidential evidence into this safe, the safe begins to count down and is placed on the decentralized public market for circulation.

---

### 1. Core Features of the Truth Box

The Truth Box is not an ordinary NFT in the traditional sense or simple stored data. It possesses the following three unique system-level features:

#### 🔐 State Machine & Time Lock

The circulation process of the Truth Box will change the state machine `Status` and the time lock `deadline`, and access permissions need to be controlled through the state machine and the time lock.

#### 📈 Delay Disclosure Premium

Wiki Truth introduces a unique "Time Financialization Game Mechanism". Buyers can pay a fee to maintain the confidentiality of the Truth Box, which we call the **Delay Disclosure Premium**.

![Delay Disclosure Premium Growth Chart](/docs/delayed-fee-curve.svg)

This is a highly innovative mechanism of the Truth Box. Buyers can extend the time lock by paying a fee. This is an **exponentially increasing** fee over time. This means that attempting to permanently cover up the truth with money is economically impossible.

> The specific rate growth coefficient and period are determined by the DAO community through governance contract voting and can be dynamically adjusted based on market feedback.

#### ⏳ Inevitable Disclosure

If the Truth Box is not purchased, or if the buyer stops paying the delay protection fee after purchasing, **the smart contract will automatically release the key, disclosing the confidential content inside to the whole world**.

> It is precisely because of the inevitable disclosure characteristic of the Truth Box that rational criminals will typically turn themselves in proactively rather than attempting to use money to cover up the truth. This is also the original intention of Wiki Truth.

---

### 2. Commodity Essence: Access Rights, Not Copyright

- **Not Trading Intellectual Property (Not Copyright)**: Purchasing a Truth Box does not mean the buyer obtains the copyright, trade secret ownership, or other exclusive intellectual property rights of the evidence content. The Truth Box itself cannot be bought and resold like an NFT.
- **Trading "Access Rights"**: What the buyer is truly purchasing is the **unique decryption access capability** to the confidential content.

Once the Truth Box's state machine enters the final `Published` state, the exclusive access rights to the asset also become invalid, and the truth will be open to the public for free.

---

### 3. Why is the Truth Box Needed?

Traditional anonymous tip-off letters often sink like a stone due to a lack of commercial incentives, resulting in the truth being permanently covered up.

The mechanism design of the Truth Box transforms these two traditional dead ends into a **transparent open game**:

- It provides **whistleblowers** with a safe, highly certain, and trustless monetization channel.
- It levies a fee (purchase and delay disclosure premium) on those **attempting to cover up the truth (criminals)**.
- It brings society and the **public** a highly probable expectation of ultimately obtaining the truth.

> The core value of Wiki Truth is not just providing an anonymous upload tool, but creating an **economic closed loop where information moves from a hidden state to a public one**.

Having understood the basic concept of the Truth Box, we will next delve into what underlying data it actually contains ([**Data Structure**](./truth-box-data.md)), and what key stages it will go through during its circulation ([**State Mechanism**](./truth-box-status-mechanism.md)).
