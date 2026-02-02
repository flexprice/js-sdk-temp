# DtoCreateTaskRequest

## Example Usage

```typescript
import { DtoCreateTaskRequest } from "flexprice-sdk-test/models/components";

let value: DtoCreateTaskRequest = {
  entityType: "FEATURES",
  fileType: "JSON",
  fileUrl: "https://necessary-wombat.net/",
  taskType: "IMPORT",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `entityType`                                                               | [components.TypesEntityType](../../models/components/types-entity-type.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `fileName`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `fileType`                                                                 | [components.TypesFileType](../../models/components/types-file-type.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `fileUrl`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `metadata`                                                                 | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `taskType`                                                                 | [components.TypesTaskType](../../models/components/types-task-type.md)     | :heavy_check_mark:                                                         | N/A                                                                        |