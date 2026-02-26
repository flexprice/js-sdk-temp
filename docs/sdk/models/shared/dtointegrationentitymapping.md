# DtoIntegrationEntityMapping

Integration entity mapping for external provider systems

## Example Usage

```typescript
import { DtoIntegrationEntityMapping } from "@flexprice/sdk-temp/sdk/models/shared";

let value: DtoIntegrationEntityMapping = {
  id: "<id>",
  provider: "stripe",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | id is the external entity ID from the provider                         |
| `provider`                                                             | [shared.Provider](../../../sdk/models/shared/provider.md)              | :heavy_check_mark:                                                     | provider is the integration provider name (e.g., "stripe", "razorpay") |