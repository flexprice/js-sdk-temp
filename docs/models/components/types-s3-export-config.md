# TypesS3ExportConfig

## Example Usage

```typescript
import { TypesS3ExportConfig } from "flexprice-sdk-test/models/components";

let value: TypesS3ExportConfig = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `bucket`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | S3 bucket name                                                                            |
| `compression`                                                                             | [components.TypesS3CompressionType](../../models/components/types-s3-compression-type.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `encryption`                                                                              | [components.TypesS3EncryptionType](../../models/components/types-s3-encryption-type.md)   | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `isFlexpriceManaged`                                                                      | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | If true, use Flexprice-managed S3 credentials instead of user-provided                    |
| `keyPrefix`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | Optional prefix for S3 keys (e.g., "flexprice-exports/")                                  |
| `region`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | AWS region (e.g., "us-west-2")                                                            |