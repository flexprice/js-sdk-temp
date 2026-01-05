# DtoDashboardCostAnalyticsRequest

## Example Usage

```typescript
import { DtoDashboardCostAnalyticsRequest } from "flexprice-sdk-test/models/components";

let value: DtoDashboardCostAnalyticsRequest = {
  endTime: "2024-01-31T23:59:59Z",
  featureIds: [
    "feat_123",
    "feat_456",
  ],
  startTime: "2024-01-01T00:00:00Z",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `endTime`                  | *string*                   | :heavy_check_mark:         | N/A                        | 2024-01-31T23:59:59Z       |
| `featureIds`               | *string*[]                 | :heavy_minus_sign:         | N/A                        | [<br/>"feat_123",<br/>"feat_456"<br/>] |
| `startTime`                | *string*                   | :heavy_check_mark:         | N/A                        | 2024-01-01T00:00:00Z       |