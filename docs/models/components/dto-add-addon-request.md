# DtoAddAddonRequest

## Example Usage

```typescript
import { DtoAddAddonRequest } from "flexprice-sdk-test/models/components";

let value: DtoAddAddonRequest = {
  addonId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `addonId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `lineItemCommitments`                                                                                                | Record<string, [components.DtoLineItemCommitmentConfig](../../models/components/dto-line-item-commitment-config.md)> | :heavy_minus_sign:                                                                                                   | LineItemCommitments allows setting commitment configuration per addon line item (keyed by price_id)                  |
| `metadata`                                                                                                           | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `startDate`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `subscriptionId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |