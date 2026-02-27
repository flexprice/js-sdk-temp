# WalletConfig

## Example Usage

```typescript
import { WalletConfig } from "flexprice-ts-temp/sdk/models/shared";

let value: WalletConfig = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `allowedPriceTypes`                                                                                              | [shared.WalletConfigPriceType](../../../sdk/models/shared/walletconfigpricetype.md)[]                            | :heavy_minus_sign:                                                                                               | AllowedPriceTypes is a list of price types that are allowed for the wallet<br/>nil means all price types are allowed |