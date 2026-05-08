---
title: Frequently Asked Questions (FAQ)
description: Detailed answers about privacy protection, trading mechanisms, legal risks, and DAO governance.
sidebar:
  order: 22
---

<!-- ## Basic Concepts -->

#### Q: Is Evidence Market a website with moral hazards?

**A:** No. Evidence Market is a **decentralized whistleblower incentive market**. There are currently many similar SaaS products and government agencies with similar businesses; we originated from the US SEC Whistleblower Program. Our original design intention is to incentivize whistleblowers to provide evidence, not to let bad actors pay ransoms.

#### Q: Do I need to register an account?

**A:** You don't need traditional email or phone number registration. You only need a Web3 wallet (like MetaMask). We verify your identity through your wallet address and SIWE (Sign-In with Ethereum), and no personal real-name information is required throughout the process.

#### Q: Can I still use it if I don't have a Web3 wallet?

**A:** Yes. The platform will automatically create an empty wallet for signing to help you get started quickly. The wallet key will be stored in your browser's `localStorage`.

> Note: You still need to back up and properly manage your key yourself; once the browser data is lost and there is no backup, the wallet may not be recoverable.

---

## Privacy and Security

#### Q: How does Evidence Market protect the privacy of whistleblowers (Minters)?

**A:** We use multiple privacy protections:

1. **Hash Algorithm UserId Mapping**: Users will hash a UserId through the UserManager contract. This hash algorithm is one-way, and the real user address cannot be reverse-engineered. All on-chain events and contract data are replaced by the UserId.
2. **On-chain Privacy**: On-chain private data is encrypted and stored in the TEE (Trusted Execution Environment) of the **Oasis Sapphire** blockchain, which has hardware-level security performance. This means that even miners of validating nodes cannot know the true ownership of the Box's UserId.
3. **Network Isolation**: We strongly recommend using Tor or VPN to access. Combined with our EIP-712 relayer proxy interaction, your physical IP and on-chain address will not leave any traces.

#### Q: What if the Evidence Market website is shut down?

**A:** Evidence Market is not a centralized service website, but a set of smart contracts running on the blockchain.

- **Frontend**: Our code is open-source and hosted on decentralized storage (IPFS/Arweave), and anyone can deploy a mirror site.
- **Backend**: Once smart contracts are deployed, they run perpetually on the Oasis network and cannot be shut down by anyone.
- **Data**: Evidence is stored in IPFS global nodes and will not be lost.

#### Q: What if cracking technology advances in the future and cracks the contracts and encryption technology?

**A:** First of all, there is no encryption technology in the world that will never be cracked.

1. We can only adopt the highest level of encryption technology. Currently, the solution based on Intel SGX adopted by Oasis Sapphire and AES-256 encryption technology are among the most secure encryption technologies known to date.
2. In addition, as cracking technology advances, encryption technology also advances. We will always follow up on the latest encryption technologies and algorithms (such as Zero-Knowledge Proofs, Fully Homomorphic Encryption, Multi-Party Computation, etc.) to ensure the highest security level of the same period.

#### Q: If the police or courts want to retrieve evidence, will you cooperate?

**A:** Even if we wanted to cooperate, we **cannot**.

1. The administrators of Evidence Market do not have a "backdoor". Only those who obtain the access rights to the Box can access confidential content. This is the essence of "code is law"—power does not belong to platform developers.
2. Because of the two mechanisms of time fee and time limit, the evidence will definitely be made public in the end, so there is absolutely no need to take measures to retrieve the evidence.

---

## Trading and Mechanisms

#### Q: If I purchase evidence (Evidence Box), do I own its copyright?

**A:** What you purchase is not copyright, but access rights to the confidential content. That is to say, you obtain the permission to view and use the content under a specific status/period (usually manifested as a private key or decryption access capability), and do not automatically obtain intellectual property rights such as copyright and patent rights.

#### Q: If a refund request occurs during the transaction process, how does the DAO intervene in arbitration?

**A:** First, once a refund application occurs, the evidence will be published on the entire network. The Oasis Sapphire smart contract fully supports this conditional access control. The DAO's arbitration process must be conducted under the condition of being public on the entire network, and everyone can publicly observe the entire process of the arbitration vote.

#### Q: Will bad actors control the DAO to achieve the purpose of not disclosing evidence?

**A:** This is a very good question. Nothing is absolutely perfect, and bad actors may indeed try to bribe DAO members to manipulate arbitration results. If this really happens, then we will definitely take some actions, such as: expanding the base of DAO organization members, designing a more reasonable DAO governance mechanism, adopting a dual voting method of anonymous + real name, etc. These measures can effectively prevent this from happening. Finally, DAO members are generally groups closely related to the interests of the project, and are basically hard to be bribed by small amounts of money.

---
