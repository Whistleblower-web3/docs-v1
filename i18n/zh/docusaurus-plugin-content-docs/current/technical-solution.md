---
title: 技术解决方案
description: Wiki Truth 基于 Oasis Sapphire 隐私公链，构建去中心化吹哨人激励和犯罪证据市场。
sidebar:
  order: 3
---

## 技术解决方案

### 我们如何构建Wiki Truth

### 1. 代码即法律 (Code is Law)

理论上不可篡改的智能合约，移除了绝大多数人为干预的可能性，按既定逻辑自动执行，而且过程与结果公开透明，这是web3的核心优势。

### 2. 隐私计算护盾 (Privacy Computing Shield)

基于 **Oasis Sapphire** 的 TEE (可信执行环境)，基于Intel SGX，提供硬件级的安全保护, 这在当前的计算模型下被认为是非常安全的。

### 3. 分布式存储（Permaweb）

整合 IPFS 与 Arweave 将证据文件粉碎存储。这消除了单点恶意或故障的风险。

## 隐私与安全

### 1. 链上隐身 (On-chain Anonymity)

对于项目合约：用户可以通过中继代理（通过ERC2771标准）交互，实现链上无法追踪。

对于代币交易：ERC20privacy支持EIP-712 签名授权交易, 并且无合约事件日志输出，实现在链上不留痕迹的情况下完成代币交易。

### 2. AES + EDCH对称加密

AES-256 在现有计算模型下被广泛认为是安全的，具备极高的破解门槛。
