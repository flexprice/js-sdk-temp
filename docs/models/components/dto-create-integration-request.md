# DtoCreateIntegrationRequest

## Example Usage

```typescript
import { DtoCreateIntegrationRequest } from "flexprice-sdk-test/models/components";

let value: DtoCreateIntegrationRequest = {
  credentials: {},
  name: "<value>",
  provider: "s3",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `credentials`                                                                      | Record<string, *string*>                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `provider`                                                                         | [components.TypesSecretProvider](../../models/components/types-secret-provider.md) | :heavy_check_mark:                                                                 | N/A                                                                                |