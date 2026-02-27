# DtoCreateTaskRequest

## Example Usage

```typescript
import { DtoCreateTaskRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCreateTaskRequest = {
  entityType: "FEATURES",
  fileType: "JSON",
  fileUrl: "https://necessary-wombat.net/",
  taskType: "IMPORT",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `entityType`                                                  | [shared.EntityType](../../../sdk/models/shared/entitytype.md) | :heavy_check_mark:                                            | N/A                                                           |
| `fileName`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `fileType`                                                    | [shared.FileType](../../../sdk/models/shared/filetype.md)     | :heavy_check_mark:                                            | N/A                                                           |
| `fileUrl`                                                     | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `metadata`                                                    | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |
| `taskType`                                                    | [shared.TaskType](../../../sdk/models/shared/tasktype.md)     | :heavy_check_mark:                                            | N/A                                                           |