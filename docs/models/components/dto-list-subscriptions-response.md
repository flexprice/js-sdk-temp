# DtoListSubscriptionsResponse

## Example Usage

```typescript
import { DtoListSubscriptionsResponse } from "flexprice-sdk-test/models/components";

let value: DtoListSubscriptionsResponse = {
  items: [
    {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `items`                                                                                      | [components.DtoSubscriptionResponse](../../models/components/dto-subscription-response.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [components.TypesPaginationResponse](../../models/components/types-pagination-response.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |