# DtoDashboardAnalyticsRequest

## Example Usage

```typescript
import { DtoDashboardAnalyticsRequest } from "flexprice-sdk-test/models/components";

let value: DtoDashboardAnalyticsRequest = {
  endTime: "2024-01-31T23:59:59Z",
  expand: [
    "price",
    "meter",
    "feature",
  ],
  featureIds: [
    "feat_123",
    "feat_456",
  ],
  groupBy: [
    "source",
    "feature_id",
  ],
  sources: [
    "api",
    "web",
  ],
  startTime: "2024-01-01T00:00:00Z",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `endTime`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 2024-01-31T23:59:59Z                                                     |
| `expand`                                                                 | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      | [<br/>"price",<br/>"meter",<br/>"feature"<br/>]                          |
| `featureIds`                                                             | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      | [<br/>"feat_123",<br/>"feat_456"<br/>]                                   |
| `groupBy`                                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      | [<br/>"source",<br/>"feature_id"<br/>]                                   |
| `propertyFilters`                                                        | Record<string, *string*[]>                                               | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sources`                                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      | [<br/>"api",<br/>"web"<br/>]                                             |
| `startTime`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 2024-01-01T00:00:00Z                                                     |
| `windowSize`                                                             | [components.TypesWindowSize](../../models/components/typeswindowsize.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |