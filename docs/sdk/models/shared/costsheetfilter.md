# CostsheetFilter

## Example Usage

```typescript
import { CostsheetFilter } from "flexprice-ts-temp/sdk/models/shared";

let value: CostsheetFilter = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `costsheetIDs`                                                            | *string*[]                                                                | :heavy_minus_sign:                                                        | CostsheetIDs allows filtering by specific costsheet IDs                   |
| `environmentID`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | EnvironmentID filters by specific environment ID                          |
| `filters`                                                                 | [shared.FilterCondition](../../../sdk/models/shared/filtercondition.md)[] | :heavy_minus_sign:                                                        | Filters contains custom filtering conditions                              |
| `lookupKey`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | LookupKey filters by lookup key                                           |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Name filters by costsheet name                                            |
| `queryFilter`                                                             | [shared.QueryFilter](../../../sdk/models/shared/queryfilter.md)           | :heavy_minus_sign:                                                        | N/A                                                                       |
| `sort`                                                                    | [shared.SortCondition](../../../sdk/models/shared/sortcondition.md)[]     | :heavy_minus_sign:                                                        | Sort specifies result ordering preferences                                |
| `status`                                                                  | [shared.Status](../../../sdk/models/shared/status.md)                     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `tenantID`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | TenantID filters by specific tenant ID                                    |
| `timeRangeFilter`                                                         | [shared.TimeRangeFilter](../../../sdk/models/shared/timerangefilter.md)   | :heavy_minus_sign:                                                        | N/A                                                                       |