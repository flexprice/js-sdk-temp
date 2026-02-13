# PostWalletsIdTopUpRequest

## Example Usage

```typescript
import { PostWalletsIdTopUpRequest } from "flexprice-sdk-test/models/operations";

let value: PostWalletsIdTopUpRequest = {
  id: "<id>",
  body: {
    transactionReason: "CREDIT_ADJUSTMENT",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Wallet ID                                                                                |
| `body`                                                                                   | [components.DtoTopUpWalletRequest](../../models/components/dto-top-up-wallet-request.md) | :heavy_check_mark:                                                                       | Top up request                                                                           |