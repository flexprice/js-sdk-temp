# DtoBillingCycleInfo

## Example Usage

```typescript
import { DtoBillingCycleInfo } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoBillingCycleInfo = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `billingAnchor`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | billing_anchor is the new billing anchor                              |
| `billingCadence`                                                      | [shared.BillingCadence](../../../sdk/models/shared/billingcadence.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `billingPeriod`                                                       | [shared.BillingPeriod](../../../sdk/models/shared/billingperiod.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `billingPeriodCount`                                                  | *number*                                                              | :heavy_minus_sign:                                                    | billing_period_count is the billing period count                      |
| `periodEnd`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | period_end is the end of the new billing period                       |
| `periodStart`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | period_start is the start of the new billing period                   |