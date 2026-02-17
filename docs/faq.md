---
title: FAQ
description: Detailed answers regarding privacy protection, transaction mechanisms, legal risks, and DAO governance.
sidebar:
  order: 22
---

### Basic Concepts

**Q: Is WikiTruth a website with moral risks?**
**A:** No. WikiTruth is a **Decentralized Whistleblower Incentive Marketplace**. Currently, there are many similar SaaS products and government agencies with similar businesses. We originated from the US SEC Whistleblower Program. In the entire process, only criminals bear the loss, while the providers of justice (whistleblowers) will be rewarded.

**Q: Do I need to register an account?**
**A:** No traditional email or mobile number registration is required. You only need a Web3 wallet (such as MetaMask). We verify your identity through your wallet address and SIWE (Sign-In with Ethereum), with no personal real-name information required throughout the process.

---

### Privacy & Security

**Q: How does WikiTruth protect the privacy of the Whistleblower (Minter)?**
**A:** We use multiple privacy protections:
1. **UserId Mapping**: The Minter is not publicly displayed. It is mapped to a UserId, and all on-chain events are replaced by the UserId.
2. **On-chain Privacy**: On-chain private data is encrypted and stored in the TEE (Trusted Execution Environment) of the **Oasis Sapphire** blockchain, which has hardware-level security performance. This means that even the miners of the verification nodes cannot know who the Minter of the Box is.
3. **Network Isolation**: We strongly recommend using Tor or VPN for access. Combined with our EIP-712 relay proxy interaction, your physical IP and on-chain address will not leave any traces.

**Q: What if the WikiTruth website is shut down?**
**A:** WikiTruth is not a centralized service website, but a set of smart contracts running on the blockchain.
- **Frontend**: Our code is open source and hosted on decentralized storage (IPFS/Arweave). Anyone can deploy a mirror site.
- **Backend**: Once the smart contracts are deployed, they run perpetually on the Oasis network, and no one can shut them down.
- **Data**: Evidence is stored in global IPFS nodes and will not be lost.

**Q: How does the platform prevent someone from maliciously uploading false evidence or irrelevant content (such as selfies)?**
**A:**
1. **Economic Cost**: Minting a Truth Box requires paying gas fees, creating a financial threshold for counterfeiting.
2. **Buyer Game**: The person most interested in verifying authenticity is the buyer (usually the criminal). If the buyer finds they bought a fake, they will immediately initiate arbitration.
3. **DAO Governance**: The community can vote to blacklist violating Truth Boxes and ban their addresses.

---

### Transactions & Mechanisms

**Q: Why is there a "Time Fee" design? Is this extortion?**
**A:** This is a philosophical question. In a world without WikiTruth, extortion happens in the dark, often accompanied by physical threats and indefinite concealment. WikiTruth makes this process **programmatic and transparent**.
More importantly, the time fee increases **exponentially** (e.g., doubling every year). This means that no matter how rich the buyer is, one day they will not be able to afford this fee. Therefore, **the disclosure of the truth is a mathematical certainty; we are just levying a "tax on time" on evil.**

**Q: I bought the evidence (Truth Box), do I own its copyright?**
**A:** There is no such thing as copyright for a Truth Box. You own the **exclusive access right** to the confidential content (private key) (during the confidentiality period).

**Q: If the police or court wants to retrieve evidence, will you cooperate?**
**A:** Even if we wanted to cooperate, we **cannot**.
1. WikiTruth administrators do not have a "backdoor". Only by obtaining access rights to the Box can one access confidential content. This is the essence of "Code is Law"—power does not belong to the platform developers.
2. Due to the existence of time fees and time limits, evidence will eventually be made public, so there is no need to take measures to retrieve evidence.

---
