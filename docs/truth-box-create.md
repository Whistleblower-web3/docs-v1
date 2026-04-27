---
title: Truth Box Minting Process
description: The full process diagram from local encryption to on-chain minting.
sidebar:
  order: 10
---

### Truth Box Minting Process

![Minting Process](/docs/create-process.svg)

The Minter needs to upload the confidential evidence and basic display information for the Box. The process for creating a Truth Box is as follows:

1. **Compression and Shredding**: Encrypt and compress the evidence files, and shred them into multiple files.
2. **Upload to Storage**: Upload the shredded files to IPFS/Arweave and obtain the CIDs of the shredded files.
3. **Symmetric Encryption**: Use the **AES + EDCH symmetric encryption** algorithm to generate a key pair, and symmetrically encrypt the CIDs of the shredded files and the compression password to obtain the encrypted data.
4. **Generate Metadata**: Package the encrypted data and the public key with the Box's basic display information into a metadata file, upload it to IPFS/Arweave, and obtain the CID of the metadata file.
5. **Mint Truth Box**: Submit the metadata file CID and encryption key to the smart contract, and complete the on-chain minting.
