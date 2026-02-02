# DtoTopUpWalletResponse

## Example Usage

```typescript
import { DtoTopUpWalletResponse } from "flexprice-sdk-test/models/components";

let value: DtoTopUpWalletResponse = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `invoiceId`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Invoice ID if an invoice was created (only for PURCHASED_CREDIT_INVOICED)                             |
| `wallet`                                                                                              | [components.DtoWalletResponse](../../models/components/dto-wallet-response.md)                        | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `walletTransaction`                                                                                   | [components.DtoWalletTransactionResponse](../../models/components/dto-wallet-transaction-response.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |