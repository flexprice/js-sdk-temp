# PostV1SubscriptionsSchedulesScheduleIdCancelRequest

## Example Usage

```typescript
import { PostV1SubscriptionsSchedulesScheduleIdCancelRequest } from "flexprice-sdk-test/models/operations";

let value: PostV1SubscriptionsSchedulesScheduleIdCancelRequest = {
  scheduleId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scheduleId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Schedule ID (optional if using request body)                                                  |
| `body`                                                                                        | [components.DtoCancelScheduleRequest](../../models/components/dto-cancel-schedule-request.md) | :heavy_minus_sign:                                                                            | Cancel request (optional if using path parameter)                                             |