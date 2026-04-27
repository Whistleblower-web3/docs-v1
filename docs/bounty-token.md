---
title: Bounty Token
description: In-depth analysis of the "one-to-many" intelligence gathering and fund distribution mechanism in the Wiki Truth bounty market.
sidebar:
  order: 1
---

# Bounty Token

If the Truth Box is a passive blind box of "evidence first, buyer later", then the **Bounty Token** is an active intelligence network of "demand first, clues later".

In the Wiki Truth bounty market, a publisher can mint a Bounty Token, locking a certain amount of funds (such as `$WTRC`, `USDT`, etc.) in a smart contract to publicly solicit specific confidential clues from the global dark web and insiders.

---

## 1. Core Mechanism of Bounty Token

Unlike the traditional "winner-takes-all" bounty model, Wiki Truth's Bounty Token adopts a more flexible and realistic **"one-pool-to-many-submissions"** model in its architectural design.

### 👥 1-to-Many Submission Structure (One-to-Many Submissions)

A complex real-world case (such as tracing hacker funds or collecting evidence of corporate financial fraud) often cannot be completely solved by a single person providing all the necessary evidence.
Therefore, **a Bounty Token allows multiple different whistleblowers to submit clues simultaneously**. These clues are stored on-chain separately in encrypted form, completely isolated and invisible to each other.

### ⚖️ Flexible Reward Distribution Pool (Flexible Reward Distribution)

The bounty locked in the Bounty Token is essentially a **Reward Pool**.
The smart contract entirely delegates the power of reward distribution and evaluation to the publisher. After decrypting and reviewing all submitted clues, the publisher can **independently determine the reward distribution ratio based on the actual contribution value of each submitter**.

- **Exclusive Full Amount**: If a submitter directly provides the decisive core evidence, the publisher can allocate 100% of the reward to them.
- **Distribution by Contribution**: If Submitter A provides a list of names and Submitter B provides a partial audio recording, the publisher can allocate 30% to A and 70% to B.
- **Invalid Rejection**: For those who submit spam or fake evidence, the publisher can refuse to distribute any reward.

---

## 2. Lifecycle of a Bounty Token

A Bounty Token typically goes through the following states from creation to closure:

1. **Created & Locked**:
   The publisher creates a Bounty, fills in a detailed description of the intelligence requirements (which may include specific verification criteria), and locks the full reward amount into the smart contract. At this point, the Bounty Token officially takes effect and is broadcasted across the network.
2. **Collecting**:
   Upon seeing the bounty, whistleblowers submit their intelligence to the Bounty contract after encrypting it locally. Each submitter receives an independent submission credential (Submission ID). During this period, the publisher can view the newly submitted clues at any time.

3. **Evaluating & Distributing**:
   The publisher decrypts the clues for offline or on-chain verification. Once the value of a clue is verified, the publisher can call the contract's `distribute` function to allocate the corresponding amount from the reward pool directly to the privacy address specified by the submitter. This action can occur multiple times until the reward pool is depleted.

4. **Closed**:
   When the set bounty goal is completely achieved or the bounty period expires, the publisher can close the Bounty Token. If there are still remaining funds in the reward pool, they will be refunded to the publisher according to the contract rules (a small platform service fee may be deducted).

---

## 3. Design Advantages: Why give the publisher distribution rights?

In a decentralized world, giving the publisher the right to distribute funds might seem to carry the risk of the publisher "reneging on a debt", but this is a carefully considered **optimal solution for market game theory**:

- **Complexity of Verification**: Real-world secrets (such as someone's criminal record or internal emails) cannot be automatically verified by on-chain oracles or smart contracts. Only the person who raised the demand (the publisher) has the ability to verify the value of the clues.
- **Reputation Game**: If an institution or individual continuously "reneges" in the Bounty Market (receiving real intelligence but refusing to pay), the reputation of their bounty address will go bankrupt, and no whistleblowers will be willing to provide clues for them in the future. In the intelligence trading market, **reputation is the admission ticket to high-value information**.
- **Multi-party Jigsaw Puzzle**: This mechanism encourages the participation of "universal intelligence agents". You don't have to grasp the whole truth; even if you only know a crucial phone number, you may get a share of the total reward pool.

### Summary

The WikiTruth Bounty Market builds a **Trustless bridge** between the demand side and the supply side through **"front-loaded funds"** and **"privacy delivery"**. By combining modern cryptography and game theory, it subverts the ancient model of "bounty" on the blockchain.
