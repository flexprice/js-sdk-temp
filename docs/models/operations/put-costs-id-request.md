# PutCostsIdRequest

## Example Usage

```typescript
import { PutCostsIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutCostsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | Costsheet ID                                                                                    |
| `body`                                                                                          | [components.DtoUpdateCostsheetRequest](../../models/components/dto-update-costsheet-request.md) | :heavy_check_mark:                                                                              | Costsheet configuration                                                                         |