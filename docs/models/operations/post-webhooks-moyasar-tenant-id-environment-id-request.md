# PostWebhooksMoyasarTenantIdEnvironmentIdRequest

## Example Usage

```typescript
import { PostWebhooksMoyasarTenantIdEnvironmentIdRequest } from "flexprice-sdk-test/models/operations";

let value: PostWebhooksMoyasarTenantIdEnvironmentIdRequest = {
  tenantId: "<id>",
  environmentId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `tenantId`                | *string*                  | :heavy_check_mark:        | Tenant ID                 |
| `environmentId`           | *string*                  | :heavy_check_mark:        | Environment ID            |
| `xMoyasarSignature`       | *string*                  | :heavy_minus_sign:        | Moyasar webhook signature |