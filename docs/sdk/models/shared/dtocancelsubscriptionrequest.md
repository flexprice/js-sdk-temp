# DtoCancelSubscriptionRequest

## Example Usage

```typescript
import { DtoCancelSubscriptionRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCancelSubscriptionRequest = {
  cancellationType: "immediate",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cancelImmediatelyInovicePolicy`                                                                      | [shared.CancelImmediatelyInvoicePolicy](../../../sdk/models/shared/cancelimmediatelyinvoicepolicy.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `cancellationType`                                                                                    | [shared.CancellationType](../../../sdk/models/shared/cancellationtype.md)                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `prorationBehavior`                                                                                   | [shared.ProrationBehavior](../../../sdk/models/shared/prorationbehavior.md)                           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `reason`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Reason for cancellation (for audit and business intelligence)                                         |