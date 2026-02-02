# DeleteSubscriptionsLineitemsIdRequest

## Example Usage

```typescript
import { DeleteSubscriptionsLineitemsIdRequest } from "flexprice-sdk-test/models/operations";

let value: DeleteSubscriptionsLineitemsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Line Item ID                                                                                                            |
| `body`                                                                                                                  | [components.DtoDeleteSubscriptionLineItemRequest](../../models/components/dto-delete-subscription-line-item-request.md) | :heavy_check_mark:                                                                                                      | Delete Line Item Request                                                                                                |