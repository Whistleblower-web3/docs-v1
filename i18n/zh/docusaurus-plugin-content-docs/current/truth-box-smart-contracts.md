---
title: 智能合约架构
description: Sapphire 上的模块化合约、升级与主网/测试网占位信息。
sidebar:
  order: 5
---

### 智能合约架构

Wiki Truth 采用模块化智能合约，部署在 **Oasis Sapphire**（EVM 兼容隐私公链）。机密数据在链上以加密形式存储，并通过 SIWE 令牌校验权限。

**核心模块**

- `AddressManager.sol`：统一管理核心合约地址、DAO、支持代币与 DEX 白名单。
- `SiweAuth.sol`：SIWE 身份认证，支持多域名校验，适配 Sapphire 零地址场景。
- `UserManager.sol`：用户 ID/黑名单管理，用来作为合约事件日志参数，保护链上身份隐私。
- `TruthBox.sol`：核心资产合约，管理状态机、定价与期限，使用 Sapphire TEE 加密存储机密数据。
- `Exchange.sol`：交易引擎，处理 Sell/Auction/Buy/Bid/Refund/Complete 全流程。
- `FundManager.sol`：资金托管与分配，负责多币种支付、自动兑换 (DEX 交互) 及收益分配。
- `Forwarder.sol`: ERC2771中继代理交互合约。

#### 网络与合约部署（主网/测试网）

| 项目           | 主网           | 测试网                                                                                 |
| -------------- | -------------- | -------------------------------------------------------------------------------------- |
| 网络名称       | Oasis Sapphire | Oasis Sapphire Testnet                                                                 |
| Chain ID       | 23294          | 23295                                                                                  |
| 区块浏览器     | 待填           | [Oasis Sapphire Testnet explorer](https://explorer.oasis.io/testnet/sapphire/address/) |
| AddressManager | 待填           | 0x268863DAeaAdcB45aBb010402600Dea7C0a04744                                             |
| TruthBox       | 待填           | 0x8Db771373077225aEb5Af7DFCa9ba33185ba0dB3                                             |
| Exchange       | 待填           | 0x0499bd1974FF382A49D0008b413422518E71e06d                                             |
| FundManager    | 待填           | 0x154f826356776a75B748373aDD310a5BB449a268                                             |
| UserManager    | 待填           | 0xeeF1c5Fd9bf0dFc8fD47D57c56B2ec9f52811CB2                                             |
| SiweAuth       | 待填           | 0x6547F0a925BD522F029D0aFEC3A239aCDcE0122a                                             |
| Forwarder      | 待填           | 0x6553408789c9ca50FDCa0E3120245674F4C529ad                                             |
