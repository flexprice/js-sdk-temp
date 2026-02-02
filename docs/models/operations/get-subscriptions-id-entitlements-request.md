# GetSubscriptionsIdEntitlementsRequest

## Example Usage

```typescript
import { GetSubscriptionsIdEntitlementsRequest } from "flexprice-sdk-test/models/operations";

let value: GetSubscriptionsIdEntitlementsRequest = {
  id: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | Subscription ID          |
| `featureIds`             | *string*[]               | :heavy_minus_sign:       | Feature IDs to filter by |