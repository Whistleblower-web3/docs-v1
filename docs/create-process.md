---
title: Minting Process
description: Illustration of the entire process from local encryption to on-chain minting.
sidebar:
  order: 10
---

### Minting Process

![Minting Process](/docs/create-process.svg)

The Minter needs to upload confidential evidence and Box display information. The process of creating a Truth Box is as follows:

1. **Compression & Shredding**: Encrypt and compress the evidence file, and shred it into multiple files.
2. **Upload to Storage**: Upload the shredded files to IPFS/Arweave to obtain the CIDs of the shredded files.
3. **Symmetric Encryption**: Use the **AES + EDCH symmetric encryption** algorithm to generate a key pair, and encrypt the shredded file CIDs and passwords to obtain the encrypted data.
4. **Generate Metadata**: Package the encrypted data and public key with the Box display information into a metadata file, upload it to IPFS/Arweave, and obtain the metadata file CID.
5. **Mint Truth Box**: Submit the metadata file CID and private key to the contract and complete the on-chain minting.
