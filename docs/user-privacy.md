---
title: User Privacy
description: User privacy protection, data integrity, and Mainnet/Testnet authorization strategies.
sidebar:
  order: 7
---

## User Privacy Protection

- **Hidden Addresses**: Protocol interaction is based on mapping wallet addresses to `UserId`s. Wallet addresses will not be exposed in event logs, using `UserId` instead to reduce on-chain associativity.
- **SIWE Permission Verification**: Reading important data requires a wallet signature SIWE token, and the contract does not provide address parameter access functions.
- **Mainnet Authorization Mode**: After the mainnet launch, it will fully adopt EIP-712 and ERC2771 signature authorization + proxy interaction, reducing visible on-chain behavior.

### UserManager Contract

```solidity

abstract contract IdentitySalt {
    error EmptyIdentitySalt();
    // Master secret for key derivation
    bytes32 private _identitySalt;

    constructor(bytes memory pers_) {
        // Initialize the cryptographically secure master secret for identity derivation
        if (_identitySalt == bytes32(0)) {
            _identitySalt = bytes32(Sapphire.randomBytes(32, pers_));
        }
    }

    /**
     * @dev Core logic: convert address to irreversible privacy hash using Sapphire KDF
     */
    function _getUserId(address user_) internal view returns (bytes32) {
        if (user_ == address(0)) return bytes32(0);

        if (_identitySalt == bytes32(0)) revert EmptyIdentitySalt();

        // Convert address to bytes32 to use as salt/context for derivation
        bytes32 contextSalt = bytes32(uint256(uint160(user_)));

        // Use Sapphire's native HKDF-based symmetric key derivation
        // This is more secure than simple keccak256 hashing
        return
            Sapphire.deriveSymmetricKey(
                Sapphire.Curve25519PublicKey.wrap(contextSalt),
                Sapphire.Curve25519SecretKey.wrap(_identitySalt)
            );
    }
}

```

> Testnet Strategy: The testnet retains direct interaction for ease of debugging and verification; for the mainnet, it is recommended to use proxy interaction to enhance privacy.
