# DtoListCreditNotesResponse

## Example Usage

```typescript
import { DtoListCreditNotesResponse } from "flexprice-sdk-test/models/components";

let value: DtoListCreditNotesResponse = {
  items: [
    {
      invoice: {
        subscription: {
          latestInvoice: {
            subscription: {
              plan: {},
            },
          },
          plan: {},
        },
      },
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
| `items`                                                                                    | [components.DtoCreditNoteResponse](../../models/components/dto-credit-note-response.md)[]  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [components.TypesPaginationResponse](../../models/components/types-pagination-response.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |