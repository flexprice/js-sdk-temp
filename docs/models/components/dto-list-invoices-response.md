# DtoListInvoicesResponse

## Example Usage

```typescript
import { DtoListInvoicesResponse } from "flexprice-sdk-test/models/components";

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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `items`                                                                                    | [components.DtoInvoiceResponse](../../models/components/dto-invoice-response.md)[]         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [components.TypesPaginationResponse](../../models/components/types-pagination-response.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |