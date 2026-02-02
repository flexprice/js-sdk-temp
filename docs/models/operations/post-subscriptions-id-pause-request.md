# PostSubscriptionsIdPauseRequest

## Example Usage

```typescript
import { PostSubscriptionsIdPauseRequest } from "flexprice-sdk-test/models/operations";

let value: PostSubscriptionsIdPauseRequest = {
  id: "<id>",
  body: {
    pauseMode: "period_end",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Subscription ID                                                                                     |
| `body`                                                                                              | [components.DtoPauseSubscriptionRequest](../../models/components/dto-pause-subscription-request.md) | :heavy_check_mark:                                                                                  | Pause subscription request                                                                          |