# DtoCustomerUsageSummaryResponse

## Example Usage

```typescript
import { DtoCustomerUsageSummaryResponse } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCustomerUsageSummaryResponse = {
  features: [
    {
      feature: {
        meter: {
          createdAt: "2024-03-20T15:04:05Z",
          eventName: "api_request",
          id: "550e8400-e29b-41d4-a716-446655440000",
          name: "API Usage Meter",
          status: "published",
          tenantId: "tenant123",
          updatedAt: "2024-03-20T15:04:05Z",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `customerId`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `features`                                                                              | [shared.DtoFeatureUsageSummary](../../../sdk/models/shared/dtofeatureusagesummary.md)[] | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `pagination`                                                                            | [shared.PaginationResponse](../../../sdk/models/shared/paginationresponse.md)           | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `period`                                                                                | [shared.DtoBillingPeriodInfo](../../../sdk/models/shared/dtobillingperiodinfo.md)       | :heavy_minus_sign:                                                                      | N/A                                                                                     |