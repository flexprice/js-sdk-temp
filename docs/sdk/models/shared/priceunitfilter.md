# PriceUnitFilter

## Example Usage

```typescript
import { PriceUnitFilter } from "flexprice-ts-temp/sdk/models/shared";

let value: PriceUnitFilter = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `endTime`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `expand`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `filters`                                                                         | [shared.FilterCondition](../../../sdk/models/shared/filtercondition.md)[]         | :heavy_minus_sign:                                                                | filters allows complex filtering based on multiple fields                         |
| `limit`                                                                           | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `offset`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `order`                                                                           | [shared.PriceUnitFilterOrder](../../../sdk/models/shared/priceunitfilterorder.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `priceUnitIds`                                                                    | *string*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |
| `sort`                                                                            | [shared.SortCondition](../../../sdk/models/shared/sortcondition.md)[]             | :heavy_minus_sign:                                                                | N/A                                                                               |
| `startTime`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `status`                                                                          | [shared.Status](../../../sdk/models/shared/status.md)                             | :heavy_minus_sign:                                                                | N/A                                                                               |