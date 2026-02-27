# DtoCreateAddonRequest

## Example Usage

```typescript
import { DtoCreateAddonRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCreateAddonRequest = {
  lookupKey: "<value>",
  name: "<value>",
  type: "onetime",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `description`                                               | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `lookupKey`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `metadata`                                                  | Record<string, *any*>                                       | :heavy_minus_sign:                                          | N/A                                                         |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `type`                                                      | [shared.AddonType](../../../sdk/models/shared/addontype.md) | :heavy_check_mark:                                          | N/A                                                         |