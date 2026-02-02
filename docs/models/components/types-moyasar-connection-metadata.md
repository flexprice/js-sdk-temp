# TypesMoyasarConnectionMetadata

## Example Usage

```typescript
import { TypesMoyasarConnectionMetadata } from "flexprice-sdk-test/models/components";

let value: TypesMoyasarConnectionMetadata = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `publishableKey`                                      | *string*                                              | :heavy_minus_sign:                                    | Moyasar Publishable Key (encrypted, for frontend use) |
| `secretKey`                                           | *string*                                              | :heavy_minus_sign:                                    | Moyasar Secret Key (encrypted)                        |
| `webhookSecret`                                       | *string*                                              | :heavy_minus_sign:                                    | Moyasar Webhook Secret (encrypted, optional)          |