# PutCreditgrantsIdRequest

## Example Usage

```typescript
import { PutCreditgrantsIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutCreditgrantsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Credit Grant ID                                                                                      |
| `body`                                                                                               | [components.DtoUpdateCreditGrantRequest](../../models/components/dto-update-credit-grant-request.md) | :heavy_check_mark:                                                                                   | Credit Grant configuration                                                                           |