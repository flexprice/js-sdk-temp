# DtoCustomerUsageSummaryResponse

## Example Usage

```typescript
import { DtoCustomerUsageSummaryResponse } from "flexprice-sdk-test/models/components";

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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `customerId`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `features`                                                                                  | [components.DtoFeatureUsageSummary](../../models/components/dto-feature-usage-summary.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `pagination`                                                                                | [components.TypesPaginationResponse](../../models/components/types-pagination-response.md)  | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `period`                                                                                    | [components.DtoBillingPeriodInfo](../../models/components/dto-billing-period-info.md)       | :heavy_minus_sign:                                                                          | N/A                                                                                         |