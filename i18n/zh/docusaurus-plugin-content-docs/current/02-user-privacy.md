---
title: 用户隐私
description: 用户隐私保护、数据完整性与主网/测试网授权策略。
sidebar:
  order: 7
---

## 如何保护用户隐私？

- **隐藏address**：协议交互基于钱包地址与 `UserId` 映射，在事件日志中不会暴露钱包地址，而以 `UserId` 代替，降低链上关联性。

- **SIWE 权限验证**：读取重要数据需通过钱包签名 SIWE 令牌，合约并不提供地址参数访问函数。

- **中继代理元交易**：主网将全面采用`ERC2771` 标准的中继代理元交易 + 中继合约`Forwarder`交互，不直接与合约交互，链上行为不可见。

- **隐私支付**：支持基于`EIP-712`签名授权的隐私代币和`Zcash`屏蔽地址支付，隐藏用户支付信息。请查看[privacy-token](/docs/privacy-token)章节。

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

> 测试网策略：测试网保留直接交互以便调试与验证；主网建议使用代理交互提升隐私性。
