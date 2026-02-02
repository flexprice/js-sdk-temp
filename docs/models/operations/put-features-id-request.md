# PutFeaturesIdRequest

## Example Usage

```typescript
import { PutFeaturesIdRequest } from "flexprice-sdk-test/models/operations";

let value: PutFeaturesIdRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Feature ID                                                                                  |
| `body`                                                                                      | [components.DtoUpdateFeatureRequest](../../models/components/dto-update-feature-request.md) | :heavy_check_mark:                                                                          | Feature update data                                                                         |