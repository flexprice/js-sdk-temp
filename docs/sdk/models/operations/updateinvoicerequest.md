# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@flexprice/sdk-temp/sdk/models/operations";

let value: UpdateInvoiceRequest = {
  id: "<id>",
  dtoUpdateInvoiceRequest: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Invoice ID                                                                              |
| `dtoUpdateInvoiceRequest`                                                               | [shared.DtoUpdateInvoiceRequest](../../../sdk/models/shared/dtoupdateinvoicerequest.md) | :heavy_check_mark:                                                                      | Invoice Update Request                                                                  |