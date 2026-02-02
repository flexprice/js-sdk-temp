# DtoSubscriptionChangeRequest

Request object for changing a subscription plan (upgrade/downgrade)

## Example Usage

```typescript
import { DtoSubscriptionChangeRequest } from "flexprice-sdk-test/models/components";

let value: DtoSubscriptionChangeRequest = {
  billingCadence: "ONETIME",
  billingCycle: "calendar",
  billingPeriod: "WEEKLY",
  prorationBehavior: "none",
  targetPlanId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `billingCadence`                                                                         | [components.TypesBillingCadence](../../models/components/types-billing-cadence.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `billingCycle`                                                                           | [components.TypesBillingCycle](../../models/components/types-billing-cycle.md)           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `billingPeriod`                                                                          | [components.TypesBillingPeriod](../../models/components/types-billing-period.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `billingPeriodCount`                                                                     | *number*                                                                                 | :heavy_minus_sign:                                                                       | billing_period_count is the billing period count for the new subscription                |
| `changeAt`                                                                               | [components.TypesScheduleType](../../models/components/types-schedule-type.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | metadata contains additional key-value pairs for storing extra information               |
| `prorationBehavior`                                                                      | [components.TypesProrationBehavior](../../models/components/types-proration-behavior.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `targetPlanId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | target_plan_id is the ID of the new plan to change to (required)                         |