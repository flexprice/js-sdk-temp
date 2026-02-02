# DtoSubscriptionChangeExecuteResponse

Response after successfully executing a subscription plan change

## Example Usage

```typescript
import { DtoSubscriptionChangeExecuteResponse } from "flexprice-sdk-test/models/components";

let value: DtoSubscriptionChangeExecuteResponse = {
  invoice: {
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `changeType`                                                                                        | [components.TypesSubscriptionChangeType](../../models/components/types-subscription-change-type.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `creditGrants`                                                                                      | [components.DtoCreditGrantResponse](../../models/components/dto-credit-grant-response.md)[]         | :heavy_minus_sign:                                                                                  | credit_grants contains any credit grants created for proration credits                              |
| `effectiveDate`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | effective_date is when the change took effect                                                       |
| `invoice`                                                                                           | [components.DtoInvoiceResponse](../../models/components/dto-invoice-response.md)                    | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `isScheduled`                                                                                       | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | is_scheduled indicates if the change was scheduled or executed immediately                          |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | metadata from the request                                                                           |
| `newSubscription`                                                                                   | [components.DtoSubscriptionSummary](../../models/components/dto-subscription-summary.md)            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `oldSubscription`                                                                                   | [components.DtoSubscriptionSummary](../../models/components/dto-subscription-summary.md)            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `prorationApplied`                                                                                  | [components.DtoProrationDetails](../../models/components/dto-proration-details.md)                  | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `scheduleId`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | schedule_id is the ID of the created schedule (only if is_scheduled=true)                           |
| `scheduledAt`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | scheduled_at is when the change will execute (only if is_scheduled=true)                            |