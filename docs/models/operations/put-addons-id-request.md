# PutAddonsIdRequest

## Example Usage

```typescript
import { PutAddonsIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutAddonsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Addon ID                                                                                |
| `body`                                                                                  | [components.DtoUpdateAddonRequest](../../models/components/dto-update-addon-request.md) | :heavy_check_mark:                                                                      | Update Addon Request                                                                    |