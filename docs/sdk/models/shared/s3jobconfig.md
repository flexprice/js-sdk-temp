# S3JobConfig

## Example Usage

```typescript
import { S3JobConfig } from "flexprice-ts-temp/sdk/models/shared";

let value: S3JobConfig = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `bucket`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | S3 bucket name                                                                 |
| `compression`                                                                  | [shared.S3CompressionType](../../../sdk/models/shared/s3compressiontype.md)    | :heavy_minus_sign:                                                             | N/A                                                                            |
| `encryption`                                                                   | [shared.S3EncryptionType](../../../sdk/models/shared/s3encryptiontype.md)      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpointUrl`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Custom S3 endpoint URL (e.g., "http://minio:9000" for MinIO)                   |
| `keyPrefix`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Optional prefix for S3 keys (e.g., "flexprice-exports/")                       |
| `region`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | AWS region (e.g., "us-west-2")                                                 |
| `usePathStyle`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | Use path-style addressing instead of virtual-hosted-style (required for MinIO) |