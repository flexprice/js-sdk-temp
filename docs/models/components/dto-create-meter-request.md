# DtoCreateMeterRequest

## Example Usage

```typescript
import { DtoCreateMeterRequest } from "flexprice-sdk-test/models/components";

let value: DtoCreateMeterRequest = {
  aggregation: {},
  eventName: "api_request",
  name: "API Usage Meter",
  resetUsage: "BILLING_PERIOD",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `aggregation`                                                               | [components.MeterAggregation](../../models/components/meter-aggregation.md) | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |
| `eventName`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | api_request                                                                 |
| `filters`                                                                   | [components.MeterFilter](../../models/components/meter-filter.md)[]         | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | API Usage Meter                                                             |
| `resetUsage`                                                                | [components.TypesResetUsage](../../models/components/types-reset-usage.md)  | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |