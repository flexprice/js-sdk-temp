# DtoCreateUserRequest

## Example Usage

```typescript
import { DtoCreateUserRequest } from "flexprice-ts-temp/sdk/models/shared";

let value: DtoCreateUserRequest = {
  roles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "service_account",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `roles`                                                   | *string*[]                                                | :heavy_check_mark:                                        | Roles are required                                        |
| `type`                                                    | [shared.UserType](../../../sdk/models/shared/usertype.md) | :heavy_check_mark:                                        | N/A                                                       |