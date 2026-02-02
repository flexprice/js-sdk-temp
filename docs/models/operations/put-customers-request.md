# PutCustomersRequest

## Example Usage

```typescript
import { PutCustomersRequest } from "flexprice-sdk-test/models/operations";

let value: PutCustomersRequest = {
  body: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Customer ID                                                                                   |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Customer External ID                                                                          |
| `body`                                                                                        | [components.DtoUpdateCustomerRequest](../../models/components/dto-update-customer-request.md) | :heavy_check_mark:                                                                            | Customer                                                                                      |