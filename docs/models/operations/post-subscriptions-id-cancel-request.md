# PostSubscriptionsIdCancelRequest

## Example Usage

```typescript
import { PostSubscriptionsIdCancelRequest } from "flexprice-sdk-test/models/operations";

let value: PostSubscriptionsIdCancelRequest = {
  id: "<id>",
  body: {
    cancellationType: "end_of_period",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Subscription ID                                                                                       |
| `body`                                                                                                | [components.DtoCancelSubscriptionRequest](../../models/components/dto-cancel-subscription-request.md) | :heavy_check_mark:                                                                                    | Cancel Subscription Request                                                                           |