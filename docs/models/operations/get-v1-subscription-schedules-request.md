# GetV1SubscriptionSchedulesRequest

## Example Usage

```typescript
import { GetV1SubscriptionSchedulesRequest } from "flexprice-sdk-test/models/operations";

let value: GetV1SubscriptionSchedulesRequest = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `pendingOnly`                    | *boolean*                        | :heavy_minus_sign:               | Filter to pending schedules only |
| `subscriptionId`                 | *string*                         | :heavy_minus_sign:               | Filter by subscription ID        |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Limit results                    |
| `offset`                         | *number*                         | :heavy_minus_sign:               | Offset for pagination            |