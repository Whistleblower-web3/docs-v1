---
title: Threat Model & Anti-Abuse
description: How Wiki Truth defends against malicious attacks through economic game theory, cryptography, and governance mechanisms.
sidebar:
  order: 14
---

## Threat Model & Anti-Abuse

The "criminal evidence economy" that Wiki Truth attempts to build is a reconstruction of the existing social governance model. Any system involving funds and confidential information will face extreme malicious attacks.

We do not rely on the assumption of "human goodness", but follow the core principle of Web3: **Make doing evil economically unviable**. Below is the system's defense model against various core threats.

---

### Threat 1: Extortion and Targeted Abuse

**Attack Model**: Attackers use the platform as an extortion tool, uploading content not to expose public interest issues, but to target and blackmail someone (e.g., spreading private photos, personal privacy).

**Defense Mechanism**:

1. **Blacklist & DAO Arbitration**: The platform strictly prohibits uploading data involving personal privacy (IDs, residential addresses, private finances, etc.). Any Truth Box violating the rules can be challenged by the community and voted into the blacklist by the DAO.
2. **Burn & Refund**: Once deemed illegal content, the buyer can get a full refund, or the attacker's revenue is frozen, completely destroying the extortionist's economic motive.
3. **Deterrence of Mandatory Publication**: Unlike traditional private extortion, Wiki Truth's delay fees increase exponentially. Even if the buyer pays, the evidence will inevitably be published eventually, meaning the extortionist cannot promise the buyer "eternal secrecy".

> **Conclusion**: Wiki Truth's mechanism design inherently rejects private transactions and is an extremely poor and uncertain extortion tool, thereby dissuading blackmailers at the root.

---

### Threat 2: Fake Evidence Attack (Oracle Problem)

**Attack Model**: Attackers use Deepfakes or forged documents to generate fake evidence and list it at a high price, attempting to defraud buyers of their funds.

**Defense Mechanism**:

1. **Verification Period**: The buyer (usually the exposed party) is the best verifier of the evidence's authenticity. After paying the base price, the buyer gets the decryption key. If the buyer finds the evidence is fake, they can initiate a dispute arbitration to the DAO during the "inspection period" and apply for a refund.
2. **Attack Cost**: Minting a Truth Box requires paying network Gas fees. If refunded by the buyer and judged as fake by DAO arbitration, the attacker not only gains no revenue but also loses the initial cost and is marked as a malicious address.
3. **Bounty Staking Verification**: In the bounty model, the publisher has the final verification right. The smart contract will only release the bounty if genuine and valid information is provided.

---

### Threat 3: Collusion

**Attack Model**: Whistleblowers collude with validator nodes, or whistleblowers collude with buyers, attempting to defraud the platform of transaction subsidies or bounty rewards.

**Defense Mechanism**:

1. **Zero-Sum Game**: The system's main funds come from the buyers' real money (there is no out-of-thin-air token issuance to subsidize buyers). If whistleblowers and buyers collude to pass funds from "left hand to right hand," not only is there zero profit, but they will also lose the 3% service fee to the platform.
2. **TEE Blinding**: Node validators cannot see the encrypted Truth Box content, thus cannot collude with whistleblowers for content-based censorship.

---

### Threat 4: Privacy Leakage and Doxxing

**Attack Model**: Criminal forces attempt to locate the true identity of anonymous whistleblowers through traffic analysis, blockchain fund tracing (analyzing wallet transfer records), social engineering, etc.

**Defense Mechanism**:

1. **Senseless Proxy Network (EIP-712, ERC2771 Relayer)**: The whistleblower's real wallet never directly sends on-chain transactions. All interactions are completed via signatures and sent by relay nodes, cutting off the on-chain origin traceability.
2. **Underlying Computation Privacy (TEE)**: Even if hackers breach the frontend website, the core encryption/decryption logic runs in the hardware Trusted Execution Environment (TEE) of Oasis Sapphire, and memory data is absolutely isolated from the outside.
3. **Privacy Asset Transfer**: The whistleblower's earnings can be settled and transferred via the `$WTRC.S` privacy token. External block explorers cannot view their balance or transfer records, forming an on-chain "dark pool" to protect whistleblowers.

---

### Conclusion: From Defense to Governance

Wiki Truth's view of security is **dynamic**. No system is invulnerable on day one, but through the triple superposition of **economic punishment (game mechanism)**, **cryptographic moat (TEE + privacy tokens)**, and **DAO's social layer consensus (blacklist rules)**, we elevate the attacker's cost of doing evil to the extreme, thereby protecting the safety and interests of genuine whistleblowers.
