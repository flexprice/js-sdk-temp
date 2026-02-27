# DtoCreateScheduledTaskRequest

## Example Usage

```typescript
import { DtoCreateScheduledTaskRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCreateScheduledTaskRequest = {
  connectionId: "<id>",
  entityType: "credit_topups",
  interval: "custom",
  jobConfig: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `connectionId`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `enabled`                                                                               | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `entityType`                                                                            | [shared.ScheduledTaskEntityType](../../../sdk/models/shared/scheduledtaskentitytype.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `interval`                                                                              | [shared.ScheduledTaskInterval](../../../sdk/models/shared/scheduledtaskinterval.md)     | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `jobConfig`                                                                             | [shared.S3JobConfig](../../../sdk/models/shared/s3jobconfig.md)                         | :heavy_check_mark:                                                                      | N/A                                                                                     |