# AddonFilter

## Example Usage

```typescript
import { AddonFilter } from "flexprice-ts-temp/sdk/models/shared";

let value: AddonFilter = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `addonIds`                                                                | *string*[]                                                                | :heavy_minus_sign:                                                        | N/A                                                                       |
| `addonType`                                                               | [shared.AddonType](../../../sdk/models/shared/addontype.md)               | :heavy_minus_sign:                                                        | N/A                                                                       |
| `endTime`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `expand`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `filters`                                                                 | [shared.FilterCondition](../../../sdk/models/shared/filtercondition.md)[] | :heavy_minus_sign:                                                        | filters allows complex filtering based on multiple fields                 |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `lookupKeys`                                                              | *string*[]                                                                | :heavy_minus_sign:                                                        | N/A                                                                       |
| `offset`                                                                  | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `order`                                                                   | [shared.AddonFilterOrder](../../../sdk/models/shared/addonfilterorder.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `sort`                                                                    | [shared.SortCondition](../../../sdk/models/shared/sortcondition.md)[]     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `startTime`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `status`                                                                  | [shared.Status](../../../sdk/models/shared/status.md)                     | :heavy_minus_sign:                                                        | N/A                                                                       |