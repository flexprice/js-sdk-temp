# FeatureFilter

## Example Usage

```typescript
import { FeatureFilter } from "flexprice-ts-temp/sdk/models/shared";

let value: FeatureFilter = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `endTime`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `expand`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `featureIds`                                                                  | *string*[]                                                                    | :heavy_minus_sign:                                                            | Feature specific filters                                                      |
| `filters`                                                                     | [shared.FilterCondition](../../../sdk/models/shared/filtercondition.md)[]     | :heavy_minus_sign:                                                            | filters allows complex filtering based on multiple fields                     |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `lookupKey`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `lookupKeys`                                                                  | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `meterIds`                                                                    | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `nameContains`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `offset`                                                                      | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `order`                                                                       | [shared.FeatureFilterOrder](../../../sdk/models/shared/featurefilterorder.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `sort`                                                                        | [shared.SortCondition](../../../sdk/models/shared/sortcondition.md)[]         | :heavy_minus_sign:                                                            | N/A                                                                           |
| `startTime`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `status`                                                                      | [shared.Status](../../../sdk/models/shared/status.md)                         | :heavy_minus_sign:                                                            | N/A                                                                           |