# UserFilter

## Example Usage

```typescript
import { UserFilter } from "flexprice-ts-temp/sdk/models/shared";

let value: UserFilter = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `endTime`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `expand`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `filters`                                                                 | [shared.FilterCondition](../../../sdk/models/shared/filtercondition.md)[] | :heavy_minus_sign:                                                        | filters allows complex filtering based on multiple fields                 |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `offset`                                                                  | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `order`                                                                   | [shared.UserFilterOrder](../../../sdk/models/shared/userfilterorder.md)   | :heavy_minus_sign:                                                        | N/A                                                                       |
| `roles`                                                                   | *string*[]                                                                | :heavy_minus_sign:                                                        | N/A                                                                       |
| `sort`                                                                    | [shared.SortCondition](../../../sdk/models/shared/sortcondition.md)[]     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `startTime`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `status`                                                                  | [shared.Status](../../../sdk/models/shared/status.md)                     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `type`                                                                    | [shared.UserType](../../../sdk/models/shared/usertype.md)                 | :heavy_minus_sign:                                                        | N/A                                                                       |
| `userIds`                                                                 | *string*[]                                                                | :heavy_minus_sign:                                                        | Specific filters for users                                                |