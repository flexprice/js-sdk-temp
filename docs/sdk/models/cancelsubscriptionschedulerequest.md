# CancelSubscriptionScheduleRequest

## Example Usage

```typescript
import { CancelSubscriptionScheduleRequest } from "flexprice-ts-temp/sdk/models";

let value: CancelSubscriptionScheduleRequest = {
  scheduleId: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `scheduleId`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Schedule ID (optional if using request body)                                    |
| `dtoCancelScheduleRequest`                                                      | [models.DtoCancelScheduleRequest](../../sdk/models/dtocancelschedulerequest.md) | :heavy_minus_sign:                                                              | Cancel request (optional if using path parameter)                               |