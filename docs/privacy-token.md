---
title: Privacy Token
description: ERC20privacy/wROSEprivacy privacy balance on Sapphire and the EIP-712 authorization process.
sidebar:
  order: 6
---

### Privacy Token

The project developed a universal `ERC20privacy` contract based on the Oasis Sapphire privacy library to achieve balance encryption and private transfers. It provides a signature authorization interface based on **EIP-712** to complete token transactions without leaving traces on-chain.

- **Balance Privacy**: The contract internally encrypts and stores balances. Normal queries only return data visible to the user themselves.
- **Signature Authorization**: Supports EIP-712 based VIEW / TRANSFER / APPROVE permissions, avoiding the exposure of sensitive authorization details on-chain.
- **No Event Logs**: Does not record event logs, preventing token transaction traces on the blockchain.
- **Anti-Replay**: Uniqueness verification of signatures and expiration time limits prevent reuse.
- **Wrap/Unwrap**: Can be wrapped/unwrapped with the base ERC20, making it compatible with external liquidity. Native tokens like sapphire testnet (TEST) can directly use deposit/withdraw interfaces.

After deploying the `ERC20privacy` contract, the `ERC20` token can be wrapped into an `ERC20privacy` token through the `wrap` and `unwrap` interfaces, thus realizing the minting of privacy tokens.

> Note: Each ERC20privacy token can only correspond to one ERC20 token.

#### Network and Contract Deployment (Mainnet/Testnet)

- **WTRC**: The token of the wikitruth project.
- **WTRC.Privacy**: The `ERC20privacy` token of WTRC.
- **wROSE.Privacy**: The `ERC20privacy` token of wROSE.

| Project | Mainnet | Testnet |
| --- | --- | --- |
| Network Name | Oasis Sapphire | Oasis Sapphire Testnet |
| Chain ID | 23294 | 23295 |
| WTRC | TBD | 0x990DE401CD0103a0107D27F82283db60F4844203 |
| WTRC.Privacy | TBD | 0x449e2CD61F0328Ae68f4A530170C892B45b4B269 |
| wROSE.Privacy | TBD | 0x4e30337908E19917f3F74adB45966114A55205c2 |

#### Example of EIP-712 Key Structure

```solidity
// EIP-712 domain parameters
bytes32 private constant EIP712_DOMAIN_TYPEHASH = keccak256(
    "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
);
bytes32 public immutable DOMAIN_SEPARATOR;

bytes32 public constant EIP_PERMIT_TYPEHASH = keccak256(
    "EIP712Permit(uint8 label,address owner,address spender,uint256 amount,uint256 deadline)"
);

enum PermitLabel { VIEW, TRANSFER, APPROVE }

struct EIP712Permit {
    PermitLabel label;
    address owner;
    address spender;
    uint256 amount;
    uint256 deadline;
    SignatureRSV signature;
}
```
