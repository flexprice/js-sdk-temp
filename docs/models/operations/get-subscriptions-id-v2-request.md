# GetSubscriptionsIdV2Request

## Example Usage

```typescript
import { GetSubscriptionsIdV2Request } from "flexprice-sdk-test/models/operations";

let value: GetSubscriptionsIdV2Request = {
  id: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Subscription ID                                                                        |
| `expand`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Comma-separated list of fields to expand (e.g., 'subscription_line_items,prices,plan') |