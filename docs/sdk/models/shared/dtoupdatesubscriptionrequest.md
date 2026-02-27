# DtoUpdateSubscriptionRequest

## Example Usage

```typescript
import { DtoUpdateSubscriptionRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoUpdateSubscriptionRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cancelAt`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `cancelAtPeriodEnd`                                                                                     | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `parentSubscriptionId`                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | ParentSubscriptionID sets or clears the parent subscription. Omit to leave unchanged; send "" to clear. |
| `status`                                                                                                | [shared.SubscriptionStatus](../../../sdk/models/shared/subscriptionstatus.md)                           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |