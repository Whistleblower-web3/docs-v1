---
title: 真相盒子数据（Truth Box Data）
description: Truth Box 的数据结构。
sidebar:
  order: 8
---

## 链上数据结构

```solidity
enum Status {Storing, Selling, Auctioning, Paid, Refunding, Delaying, Published, Blacklisted}

struct PublicData {
  Status _status;
  uint256 _price;
  uint256 _deadline;
}

struct SecretData {
  bytes32 _minterId;
  bytes _encryptedData; // sapphire encrypted data (private key)
  bytes32 _nonce; // sapphire encrypted nonce, decryption required
}

mapping(uint256 boxId => BasicData) internal _basicData;
mapping(uint256 boxId => SecretData) internal _secretData;
```

- **PublicData**：当前状态、价格与过期时间，用于交易撮合，访问权限控制。
- **SecretData**：由 Sapphire TEE 加密的机密字段，包含创建者ID、加密后的机密数据（通常是密钥）与随机数。

> minterId并不是address，而是通过UserManager合约生成的随机bytes32类型的数据，和address很像，但它和真实的address没有任何关系，这么做是为了保证吹哨人的原始地址在链上不被关联，从而保证隐私性。

## metadata-Box

Truth Box 的元数据文件存储在IPFS上，其cid并不会直接存储在合约中，而是通过合约事件触发，记录在链上。

```solidity
emit BoxCreated(boxId, userId, boxInfoCID_);
```

Truth Box 的有两种创建方法：`create`和`createAndPublish`。

### create

创建一个可以出售的Truth Box，创建后的Status为`Storing`，只有create需要对数据进行加密处理，元数据中包含加密后的数据。

```json
{
  "mint_method": "create",
  "encryption_slices_metadata_cid": {
    "encryption_data": "0xabae872298fe488793f17df3e79c5dd4e8f8e9f9da0cf1edee035314887c7192deb7ada30b04915e0602a75c001991ecc570966430f9cf6fa06d3d8fb53caa1e02d7417447f91957336525",
    "encryption_iv": "0x76ed0699369e1b84988d424b"
  },
  "encryption_file_cid": [
    {
      "encryption_data": "0x71f4e8844358d32996f98a27c807fffdd706dec902764f6ba00221ca5e3e16c80c42a86a65c6f975ad1ce6d566cdccda5335d7379985956c39fb1bffb51e0dc9510f2c48cf7a1985cf7487",
      "encryption_iv": "0x11bcacd05f25f5fb5dc88191"
    },
    {
      "encryption_data": "0xd3d0d4d7f519cc846dfd2faeaf0cc3de1be26fdd7e0b7405778d6c42d9da140f6f281e318a45331fc5f65ea4b2dccc61bbc36ddc02a34a1fea31eb05b59ae5ba762c3136f58ace71c57245",
      "encryption_iv": "0x827b3181516cb4283ac44a76"
    }
  ],
  "encryption_password": {
    "encryption_data": "0xbad15d202fc944949086f1d490d169f2b17b49f71fd0ca63020348b8060e8166c6a485c0c3c87d59d8810b6e8480a73cf1900287722afc053296d4522e9dc51ed8f72b7ab6f3f9ae65440aef7b6f3518",
    "encryption_iv": "0x3dd46d0c6a9df5c8e7bf9b3f"
  },
  "public_key": "0x3059301306072a8648ce3d020106082a8648ce3d03010703420004cdb130ae2d72132ec0369c11873353f22ddb09e4f0d52c221c9d673090596bc38fab6d842690d0ce6aedf7fddc740fd1572c2511e86728b1332b6eb8732ad9ca",
  "file_list": []
}
```

### createAndPublish

创建一个直接公开的Truth Box，Status为`Published`，不需要加密，也不包含对称加密后的数据，而是直接存储直接访问的证据文件CID。

```json
{
  "mint_method": "createAndPublish",
  // "encryption_slices_metadata_cid": {
  //   "encryption_data": "",
  //   "encryption_iv": ""
  // },
  // "encryption_file_cid": [],
  // "encryption_password": {
  //   "encryption_data": "",
  //   "encryption_iv": ""
  // },
  // "public_key": "",
  "file_list": ["bafkreibnsg36tgfxsoyq3jb6dfwwb3ffunn3mrrd6twlj6p5mhstfym3xy"]
}
```
