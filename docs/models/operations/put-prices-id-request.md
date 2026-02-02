# PutPricesIdRequest

## Example Usage

```typescript
import { PutPricesIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutPricesIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Price ID                                                                                |
| `body`                                                                                  | [components.DtoUpdatePriceRequest](../../models/components/dto-update-price-request.md) | :heavy_check_mark:                                                                      | Price configuration                                                                     |