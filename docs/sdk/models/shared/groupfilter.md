# GroupFilter

## Example Usage

```typescript
import { GroupFilter } from "flexprice-ts-temp/sdk/models/shared";

let value: GroupFilter = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `endTime`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `entityType`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `expand`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `filters`                                                                 | [shared.FilterCondition](../../../sdk/models/shared/filtercondition.md)[] | :heavy_minus_sign:                                                        | filters allows complex filtering based on multiple fields                 |
| `groupIds`                                                                | *string*[]                                                                | :heavy_minus_sign:                                                        | Group specific filters                                                    |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `lookupKey`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `offset`                                                                  | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `order`                                                                   | [shared.GroupFilterOrder](../../../sdk/models/shared/groupfilterorder.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `sort`                                                                    | [shared.SortCondition](../../../sdk/models/shared/sortcondition.md)[]     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `startTime`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `status`                                                                  | [shared.Status](../../../sdk/models/shared/status.md)                     | :heavy_minus_sign:                                                        | N/A                                                                       |