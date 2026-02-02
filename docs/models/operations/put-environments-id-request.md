# PutEnvironmentsIdRequest

## Example Usage

```typescript
import { PutEnvironmentsIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutEnvironmentsIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Environment ID                                                                                      |
| `body`                                                                                              | [components.DtoUpdateEnvironmentRequest](../../models/components/dto-update-environment-request.md) | :heavy_check_mark:                                                                                  | Environment                                                                                         |