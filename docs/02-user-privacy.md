---
title: User Privacy
description: User privacy protection, data integrity, and Mainnet/Testnet authorization strategies.
sidebar:
  order: 7
---

### User Privacy Protection

- **Hidden Addresses**: Protocol interaction is based on mapping wallet addresses to `UserId`s. Wallet addresses will not be exposed in event logs, using `UserId` instead to reduce on-chain associativity.

- **SIWE Permission Verification**: Reading important data requires a wallet signature SIWE token, and the contract does not provide address parameter access functions.

- **Relay Proxy Meta Transactions**: The mainnet will fully adopt the `ERC2771` standard for relay proxy meta transactions + relay contract `Forwarder` interaction, without direct interaction with the contract, and on-chain behavior is not visible.

- **Privacy Payments**: Supports payments via privacy tokens and Zcash masked addresses authorized by `EIP-712` signatures, hiding user payment information. Please see the [privacy-token](/docs/privacy-token) section.

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

    /**
     * @dev Base on SIWE contract
     * @param siweToken_ SIWE token
     * @return user_id User ID
    */
    function myUserId(bytes memory siweToken_) public view returns (bytes32) {
        address sender = msg.sender;
        if (sender == address(0)) {
            // Use SiweContext get sender
            sender = _msgSenderSiwe(SIWE_AUTH, siweToken_);
        }
        _checkInBlacklist(sender);

        return _getUserId(sender);
    }
}

```

> Testnet Strategy: The testnet retains direct interaction for ease of debugging and verification; for the mainnet, it is recommended to use proxy interaction to enhance privacy.
