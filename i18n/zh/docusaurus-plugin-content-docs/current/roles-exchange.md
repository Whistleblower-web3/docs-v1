---
title: 角色与交易机制
description: 了解生态中的关键参与者、权限体系与交易生命周期。
sidebar:
  order: 11
---

# 角色与交易机制

Wiki Truth 的生态系统依赖于多方角色的协作博弈。为了确保系统的去中心化与抗审查性，我们设计了精细的权限分离与激励机制。

## 1. 生态关键角色 (Key Roles)

- **Minter**：Truth Box 创建者，即吹哨者。
- **Seller**：代理出售Box的其它用户。
- **Buyer**：支付购买/竞拍 Truth Box。
- **Bidder**: 参与竞拍的用户。
- **Completer**：代理执行完成订单的其它用户（非Buyer和Minter）。
- **DAO**：治理与参数调整、黑名单处理、交易争议裁决的最高权限实体。

---

## 2. 权限与状态流转

智能合约通过状态机严格限制了各角色的操作权限。

![角色与权限](/docs/roles-permission.svg)

### 关键操作权限表

| 操作 (Action)                    | 执行者 (Role)             | 前置条件 (Pre-condition)    | 说明                                                        |
| :------------------------------- | :------------------------ | :-------------------------- | :---------------------------------------------------------- |
| **Extend Deadline** (延长保护期) | **Minter**                | 保护期窗口内                | Minter 可延长自己对资产的独占控制权。                       |
| **Sell / Auction** (挂单/拍卖)   | **Minter** / **Seller**   | 资产处于 Storing 状态       | 若超期，Keeper (Seller) 可介入挂单。                        |
| **Buy / Bid** (购买/竞价)        | **Buyer** / **Bidder**    | 资产处于 Selling/Auctioning | 需支付足额代币。                                            |
| **Request Refund** (申请退款)    | **Buyer**                 | 验货期内 (Paid 状态)        | 可申请退款仲裁。                                            |
| **Refund Decision** (仲裁决议)   | **Minter** / **DAO**      | 资产处于 Refunding 状态     | Minter 可主动退款；争议由 DAO 裁决。                        |
| **Complete Order** (完成订单)    | **Buyer** / **Completer** | 超过退款期                  | 确认交易完成，资金释放，Helper 获得奖励。                   |
| **Pay Premium** (支付溢价)       | **Buyer**                 | 资产处于 Delaying 状态      | 支付**延迟披露溢价**以维持保密状态。                        |
| **Publish** (公开真相)           | **Minter** / **Buyer**    | 视状态而定                  | Minter 可随时公开；Buyer 在保密期内可公开；欠费则自动公开。 |

![交易流程](/docs/exchange-process.svg)

---

## 3. 数据访问权限 (Privacy Access Control)

基于 Oasis Sapphire 的 TEE 隐私特性，Truth Box 中的机密数据（如解密私钥）仅对当前状态下的合法持有者开放。

| 资产状态 (Status)             | 有权查看者 (Access Granted) | 说明                                               |
| :---------------------------- | :-------------------------- | :------------------------------------------------- |
| **Storing** (存储中)          | **Minter**                  | 资产尚未上市，仅创建者可见。                       |
| **Selling/Auctioning** (在售) | **Minter**                  | 交易未达成，依然保密。                             |
| **Paid** (已支付/验货)        | **Buyer**                   | 买家获得访问权以验证真伪。                         |
| **Refunding** (争议仲裁)      | **Everyone**                | 需特定权限方介入仲裁 (注: 具体取决于DAO治理机制)。 |
| **Delaying** (延迟批露)       | **Buyer**                   | 买家付费独享访问权限。                             |
| **Published** (已公开)        | **Everyone**                | 真相进入公共领域，任何人可解密。                   |
