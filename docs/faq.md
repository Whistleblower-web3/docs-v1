---
title: Frequently Asked Questions (FAQ)
description: Detailed answers regarding privacy protection, trading mechanisms, legal risks, and DAO governance.
sidebar:
  order: 22
---

## Basic Concepts

**Q: Is Wiki Truth a website with moral hazards?**
**A:** Not at all. Wiki Truth is a **decentralized whistleblower incentive market**. There are many similar SaaS products currently, and government agencies have similar operations; we originated from the US SEC Whistleblower Program. In the entire process, only the criminals bear the loss, while the providers of justice (whistleblowers) are rewarded.

**Q: Do I need to register an account?**
**A:** No traditional email or phone number registration is required. You only need a Web3 wallet (like MetaMask). We verify your identity through your wallet address and SIWE (Sign-In with Ethereum). Throughout the process, there is no need to provide any real-name personal information.

**Q: Can I still use it if I don't have a Web3 wallet?**
**A:** Yes. The platform will automatically create an empty wallet for signing to help you get started quickly. The wallet key will be saved in your browser's `localStorage`. You still need to back up and properly manage the key yourself; once the browser data is lost without a backup, this wallet may not be recoverable.

---

## Privacy and Security

**Q: How does Wiki Truth protect the privacy of the whistleblower (Minter)?**
**A:** We use multiple privacy protections:

1. **UserId Mapping**: The Minter is not displayed publicly; it is mapped to a UserId, and all on-chain events are represented by the UserId.
2. **On-chain Privacy**: On-chain private data is encrypted and stored in the TEE (Trusted Execution Environment) of the **Oasis Sapphire** blockchain, featuring hardware-level security. This means that even the miners of the validator nodes cannot know who the Minter of the Box is.
3. **Network Isolation**: We strongly recommend using Tor or a VPN. Combined with our EIP-712 relayer proxy interaction, your physical IP and on-chain address will not leave any traces.

**Q: What happens if the Wiki Truth website is shut down?**
**A:** Wiki Truth is not a centralized service website, but a set of smart contracts running on the blockchain.

- **Frontend**: Our code is open-source and hosted on decentralized storage (IPFS/Arweave). Anyone can deploy a mirror site.
- **Backend**: Once the smart contract is deployed, it runs perpetually on the Oasis network and cannot be shut down by anyone.
- **Data**: Evidence is stored on global IPFS nodes and will not be lost.

**Q: How does the platform prevent malicious uploads of fake evidence or irrelevant content (like selfies)?**
**A:**

1. **Economic Cost**: Minting a Truth Box requires paying gas fees, creating a financial barrier to fraud.
2. **Buyer's Game**: The buyer (usually the criminal) is the one most eager to verify authenticity. If the buyer finds they bought a fake, they will immediately initiate arbitration.
3. **DAO Governance**: The community can vote to blacklist violating Truth Boxes and ban their addresses.

---

## Trading and Mechanism

**Q: Why is there a "time fee" design? Isn't this extortion?**
**A:** This is a philosophical question. In a world without Wiki Truth, extortion happens in the dark and is often accompanied by physical threats and indefinite cover-ups. Wiki Truth **programmatizes and transparentizes** this process.
More importantly, the time fee **increases exponentially** (e.g., doubling every year). This means that no matter how rich the buyer is, they will eventually be unable to afford the fee. Therefore, **in the mechanism design, the publication of the truth is a deductive result of the economic model; we are merely levying a "tax on time" against evil.**

**Q: If I buy evidence (Truth Box), do I own its copyright?**
**A:** You are not buying the copyright, but the access rights to the confidential content. That is, you acquire the right to view and use the content under a specific status/time limit (usually manifested as a private key or decryption access capability), but you do not automatically acquire intellectual property rights such as copyrights or patents.

**Q: Will the Gas cost be high for new users using it for the first time?**
**A:** No. Thanks to the low Gas fees of the Oasis Sapphire network, each wallet address is provided with one free minting opportunity by default, mainly to lower the threshold for non-Web3 users to use it for the first time.

**Q: If the police or courts want to obtain evidence, will you cooperate?**
**A:** Even if we wanted to cooperate, we **cannot**.

1. Wiki Truth administrators have no "backdoors". Confidential content can only be accessed by obtaining the Box's access rights. This is the essence of "Code is Law" — power does not belong to the platform developers.
2. Because of the two mechanisms of time fees and time limits, the evidence will definitely be made public eventually. There is absolutely no need to take measures just to retrieve the evidence.

---
