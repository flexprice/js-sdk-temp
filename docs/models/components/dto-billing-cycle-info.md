# DtoBillingCycleInfo

## Example Usage

```typescript
import { DtoBillingCycleInfo } from "flexprice-sdk-test/models/components";

let value: DtoBillingCycleInfo = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `billingAnchor`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | billing_anchor is the new billing anchor                                           |
| `billingCadence`                                                                   | [components.TypesBillingCadence](../../models/components/types-billing-cadence.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `billingPeriod`                                                                    | [components.TypesBillingPeriod](../../models/components/types-billing-period.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `billingPeriodCount`                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | billing_period_count is the billing period count                                   |
| `periodEnd`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | period_end is the end of the new billing period                                    |
| `periodStart`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | period_start is the start of the new billing period                                |