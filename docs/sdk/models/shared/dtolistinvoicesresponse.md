# DtoListInvoicesResponse

## Example Usage

```typescript
import { DtoListInvoicesResponse } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoListInvoicesResponse = {
  items: [
    {
      subscription: {
        latestInvoice: {
          subscription: {
            plan: {},
          },
        },
        plan: {},
      },
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `items`                                                                         | [shared.DtoInvoiceResponse](../../../sdk/models/shared/dtoinvoiceresponse.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pagination`                                                                    | [shared.PaginationResponse](../../../sdk/models/shared/paginationresponse.md)   | :heavy_minus_sign:                                                              | N/A                                                                             |