# DtoCancelSubscriptionResponse

## Example Usage

```typescript
import { DtoCancelSubscriptionResponse } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCancelSubscriptionResponse = {
  prorationInvoice: {
    subscription: {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cancellationType`                                                              | [shared.CancellationType](../../../sdk/models/shared/cancellationtype.md)       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `effectiveDate`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `message`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Response metadata                                                               |
| `processedAt`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `prorationDetails`                                                              | [shared.DtoProrationDetail](../../../sdk/models/shared/dtoprorationdetail.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |
| `prorationInvoice`                                                              | [shared.DtoInvoiceResponse](../../../sdk/models/shared/dtoinvoiceresponse.md)   | :heavy_minus_sign:                                                              | N/A                                                                             |
| `reason`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `status`                                                                        | [shared.SubscriptionStatus](../../../sdk/models/shared/subscriptionstatus.md)   | :heavy_minus_sign:                                                              | N/A                                                                             |
| `subscriptionId`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | Basic cancellation info                                                         |
| `totalCreditAmount`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |