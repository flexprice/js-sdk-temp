# DtoOverrideLineItemRequest

## Example Usage

```typescript
import { DtoOverrideLineItemRequest } from "flexprice-sdk-test/models/components";

let value: DtoOverrideLineItemRequest = {
  priceId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `amount`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Amount is the new price amount that overrides the original price (optional)                        |
| `billingModel`                                                                                     | [components.TypesBillingModel](../../models/components/typesbillingmodel.md)                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `priceId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | PriceID references the plan price to override                                                      |
| `priceUnitAmount`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | PriceUnitAmount is the amount of the price unit (for CUSTOM type, FLAT_FEE/PACKAGE billing models) |
| `priceUnitTiers`                                                                                   | [components.DtoCreatePriceTier](../../models/components/dtocreatepricetier.md)[]                   | :heavy_minus_sign:                                                                                 | PriceUnitTiers are the tiers for the price unit (for CUSTOM type, TIERED billing model)            |
| `quantity`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Quantity for this line item (optional)                                                             |
| `tierMode`                                                                                         | [components.TypesBillingTier](../../models/components/typesbillingtier.md)                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `tiers`                                                                                            | [components.DtoCreatePriceTier](../../models/components/dtocreatepricetier.md)[]                   | :heavy_minus_sign:                                                                                 | Tiers determines the pricing tiers for this line item                                              |
| `transformQuantity`                                                                                | [components.PriceTransformQuantity](../../models/components/pricetransformquantity.md)             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |