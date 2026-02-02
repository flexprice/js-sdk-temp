# TypesWalletConfig

## Example Usage

```typescript
import { TypesWalletConfig } from "flexprice-sdk-test/models/components";

let value: TypesWalletConfig = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `allowedPriceTypes`                                                                                              | [components.TypesWalletConfigPriceType](../../models/components/types-wallet-config-price-type.md)[]             | :heavy_minus_sign:                                                                                               | AllowedPriceTypes is a list of price types that are allowed for the wallet<br/>nil means all price types are allowed |