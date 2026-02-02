# DtoCancelSubscriptionRequest

## Example Usage

```typescript
import { DtoCancelSubscriptionRequest } from "flexprice-sdk-test/models/components";

let value: DtoCancelSubscriptionRequest = {
  cancellationType: "immediate",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cancellationType`                                                                       | [components.TypesCancellationType](../../models/components/types-cancellation-type.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `prorationBehavior`                                                                      | [components.TypesProrationBehavior](../../models/components/types-proration-behavior.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `reason`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | Reason for cancellation (for audit and business intelligence)                            |