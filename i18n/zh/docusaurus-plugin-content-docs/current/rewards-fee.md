---
title: 赏金与博弈成本
description: 了解 Wiki Truth 的自动赏金分配机制与延迟披露溢价模型。
sidebar:
  order: 12
---

## 赏金分配与博弈成本

Wiki Truth 的经济模型旨在平衡**吹哨人激励**、**社区参与动力**与**平台可持续性**。所有的资金流转均由智能合约自动执行，确保透明、公正且不可篡改。

### 1. Truth Box 奖励分配 (Truth Box Rewards Allocation)

![奖励分配](/docs/rewards-allocation.svg)

当真相资产 (Truth Box) 在市场上成功流转（被购买）时，交易金额将按照以下比例自动分配。这不仅奖励了真相的提供者，也激励了维护市场秩序的第三方参与者。

- **Minter奖励**：证据提供者获得交易金额主体（扣除Helper奖励）， 如果没有Helper， 则全部归Minter。
- **Helper奖励**：符合条件的代理执行者（Seller/Completer）， 每个Helper分别可以获得1%的交易金额。
- **平台服务费**：成功交易收取 3% 进入 DAO 国库， 将支持DAO治理与项目发展。

SEC等机构一般会奖励whistleblower罚没资金的10%-15%，但是Wiki Truth的奖励机制是将绝大部分收益都分配给minter(whistleblower)。

### 2. Bounty Token 奖励分配 (Bounty Token Rewards Allocation)

> 该机制暂时未启用，将在后续推出
