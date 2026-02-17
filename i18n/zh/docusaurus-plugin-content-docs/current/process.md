---
title: 运行流程
description: 从真相加密铸造到市场博弈、延迟披露与最终公开的全流程解析。
sidebar:
  order: 4
---

### 核心运行流程

Wiki Truth 通过智能合约将传统的线下事实披露流程转化为链上可量化的**价值博弈流程**。

在协议运行中，涉及三类核心角色：**吹哨人 (Minter)**、**Buyer** 以及**Helpers: Seller/Completer**。

![简单流程](/docs/symbol-process.svg)

#### 1. 真相资产化 (Assetization)

- **上传**：上传证据文件与元数据至 IPFS/Arweave。
- **铸造**：在智能合约中铸造 **Truth Box**。

#### 2. 市场流通 (Market Circulation)

- **出售/拍卖**：Minter 可在保护期内发起出售或拍卖。
- **Help Sell**：若超时，任何人都可以辅助出售，成为Seller。

#### 3. 交割与验证 (Delivery)

- **购买**：Buyer 支付后，获得访问权。
- **验货期**：Buyer 可选择申请退款，或者完成订单；
- **Help Complete**：若超时，任何人都可以辅助完成订单，成为Completer。

#### 4. 延迟披露与博弈 (Delayed Disclosure & Game)

- **延迟状态**：交易完成后，Box进入“Delaying”状态。
- **延迟费用**：Buyer 需定期支付**延迟费用 (Delayed Fee)**。
- **最终披露**：如果 Buyer 停止支付延迟费用，Box将自动进入“Published”状态，真相被披露，完成其最终的社会价值兑现。

---
