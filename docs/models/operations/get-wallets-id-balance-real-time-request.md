# GetWalletsIdBalanceRealTimeRequest

## Example Usage

```typescript
import { GetWalletsIdBalanceRealTimeRequest } from "flexprice-sdk-test/models/operations";

let value: GetWalletsIdBalanceRealTimeRequest = {
  id: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Wallet ID                                         |
| `expand`                                          | *string*                                          | :heavy_minus_sign:                                | Expand fields (e.g., credits_available_breakdown) |