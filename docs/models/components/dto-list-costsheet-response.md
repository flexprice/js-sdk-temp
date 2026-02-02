# DtoListCostsheetResponse

## Example Usage

```typescript
import { DtoListCostsheetResponse } from "flexprice-sdk-test/models/components";

let value: DtoListCostsheetResponse = {
  items: [
    {
      prices: [
        {
          meter: {
            createdAt: "2024-03-20T15:04:05Z",
            eventName: "api_request",
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "API Usage Meter",
            status: "published",
            tenantId: "tenant123",
            updatedAt: "2024-03-20T15:04:05Z",
          },
          plan: {},
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `items`                                                                                    | [components.DtoCostsheetResponse](../../models/components/dto-costsheet-response.md)[]     | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [components.TypesPaginationResponse](../../models/components/types-pagination-response.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |