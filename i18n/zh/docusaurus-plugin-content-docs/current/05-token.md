---
title: 代币 (Token)
description: Evidence Market EMC 代币价值捕获与资金流向分配。
sidebar:
  order: 15
---

## 1. 代币效用 (Token Utility)

`EMC` (Evidence Market Coin) 是生态系统的原生代币，具备以下核心效用：

1. **交易媒介 (Medium of Exchange)**：
   - 购买 Evidence Box 访问权的基础结算货币。
   - 支付指数级增长的“延迟披露溢价 (Delay Premium)”。
   - 发布 Bounty 悬赏任务时锁定的底层资产。

2. **隐私交易燃料 (Privacy Gas & Anonymous Transfer)**：
   - 结合 Oasis Sapphire 隐私网络与 EIP-712 标准，`EMC` 可以封装为隐私代币 `EMC.Privacy`，实现全匿名的链上支付，确保吹哨人资金流向不可追踪。

3. **防滥用质押 (Staking for Security)**：
   - 悬赏发布方需质押一定 `EMC` 以防止发布恶意、虚假的任务。
   - 节点验证者（Helpers）需质押代币，才能在网络中捕获清算奖励。

4. **协议治理 (Governance)**：
   - 持有 `EMC` 的成员可参与 DAO 投票，决定协议核心参数（如：平台交易抽成比例、延迟费增长曲线系数、黑名单争议仲裁等）。

> 代币部署地址，请阅读[项目代币](/docs/privacy-token)。

---

## 2. 平台资金流向与价值捕获 (Token Flow)

Evidence Market 系统内产生的所有交易费用，将通过智能合约进行去信任分配：

- **吹哨人 (Minter)**：获得绝大部分的核心收益（通常为交易总额的 **95% - 97%**）。
- **辅助交易者 (Helpers)**：协助执行链上状态变更（如超时清算、辅助上架等）的用户，将获得约 **1% - 2%** 的操作激励。
- **平台国库 (DAO Treasury)**：每一笔成功的流转交易，将收取固定的服务费（测试网设定为 **3%**）进入 DAO 国库。
  - **回购机制**：国库资金的部分将用于在二级市场**回购并销毁** `EMC`，为代币赋予通缩属性。
  - **生态反哺**：其余部分用于补充新用户的无感知 Gas 池，以及提供给协议安全审计团队。

---

## 3. 代币分配结构 (Token Distribution)

> 💡 **注：代币分配方案暂时不会推出，将在合适的时候公布，但是我们会给早期参与者一定的空投作为奖励。**
