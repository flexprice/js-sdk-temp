# PutInvoicesIdPaymentRequest

## Example Usage

```typescript
import { PutInvoicesIdPaymentRequest } from "flexprice-sdk-test/models/operations";

let value: PutInvoicesIdPaymentRequest = {
  id: "<id>",
  body: {
    paymentStatus: "OVERPAID",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Invoice ID                                                                                               |
| `body`                                                                                                   | [components.DtoUpdatePaymentStatusRequest](../../models/components/dto-update-payment-status-request.md) | :heavy_check_mark:                                                                                       | Payment Status Update Request                                                                            |