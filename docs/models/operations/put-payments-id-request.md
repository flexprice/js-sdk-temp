# PutPaymentsIdRequest

## Example Usage

```typescript
import { PutPaymentsIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutPaymentsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Payment ID                                                                                  |
| `body`                                                                                      | [components.DtoUpdatePaymentRequest](../../models/components/dto-update-payment-request.md) | :heavy_check_mark:                                                                          | Payment configuration                                                                       |