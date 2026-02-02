# DtoUpdatePaymentStatusRequest

## Example Usage

```typescript
import { DtoUpdatePaymentStatusRequest } from "flexprice-sdk-test/models/components";

let value: DtoUpdatePaymentStatusRequest = {
  paymentStatus: "INITIATED",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `amount`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | amount is the optional payment amount to record                                  |
| `paymentStatus`                                                                  | [components.TypesPaymentStatus](../../models/components/types-payment-status.md) | :heavy_check_mark:                                                               | N/A                                                                              |