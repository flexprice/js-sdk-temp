# DtoCostAnalyticItem

## Example Usage

```typescript
import { DtoCostAnalyticItem } from "flexprice-sdk-test/models/components";

let value: DtoCostAnalyticItem = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `costByPeriod`                                                         | [components.DtoCostPoint](../../models/components/dto-cost-point.md)[] | :heavy_minus_sign:                                                     | Breakdown                                                              |
| `costsheetId`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `currency`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Metadata                                                               |
| `customerId`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `externalCustomerId`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `meter`                                                                | [components.MeterMeter](../../models/components/meter-meter.md)        | :heavy_minus_sign:                                                     | N/A                                                                    |
| `meterId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `meterName`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `price`                                                                | [components.PricePrice](../../models/components/price-price.md)        | :heavy_minus_sign:                                                     | N/A                                                                    |
| `priceId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `properties`                                                           | Record<string, *string*>                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `source`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `totalCost`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Aggregated metrics                                                     |
| `totalEvents`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `totalQuantity`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |