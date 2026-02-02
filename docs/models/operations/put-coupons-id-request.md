# PutCouponsIdRequest

## Example Usage

```typescript
import { PutCouponsIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutCouponsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Coupon ID                                                                                 |
| `body`                                                                                    | [components.DtoUpdateCouponRequest](../../models/components/dto-update-coupon-request.md) | :heavy_check_mark:                                                                        | Coupon update request                                                                     |