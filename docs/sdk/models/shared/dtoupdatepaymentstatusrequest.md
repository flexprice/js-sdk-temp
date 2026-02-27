# DtoUpdatePaymentStatusRequest

## Example Usage

```typescript
import { DtoUpdatePaymentStatusRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoUpdatePaymentStatusRequest = {
  paymentStatus: "INITIATED",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `amount`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | amount is the optional payment amount to record                     |
| `paymentStatus`                                                     | [shared.PaymentStatus](../../../sdk/models/shared/paymentstatus.md) | :heavy_check_mark:                                                  | N/A                                                                 |