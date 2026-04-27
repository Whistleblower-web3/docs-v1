---
title: 用户隐私
description: 用户隐私保护、数据完整性与主网/测试网授权策略。
sidebar:
  order: 7
---

## 用户隐私保护

- **隐藏address**：协议交互基于钱包地址与 `UserId` 映射，在事件日志中不会暴露钱包地址，而以 `UserId` 代替，降低链上关联性。
- **SIWE 权限验证**：读取重要数据需通过钱包签名 SIWE 令牌，合约并不提供地址参数访问函数。
- **主网授权模式**：主网上线后将全面采用 EIP-712和ERC2771 签名授权 + 代理交互，减少链上可见行为。

### UserManager合约

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

> 测试网策略：测试网保留直接交互以便调试与验证；主网建议使用代理交互提升隐私性。
