import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesS3CompressionType } from "./typess3compressiontype.js";
import { TypesS3EncryptionType } from "./typess3encryptiontype.js";
export type TypesS3JobConfig = {
    /**
     * S3 bucket name
     */
    bucket?: string | undefined;
    compression?: TypesS3CompressionType | undefined;
    encryption?: TypesS3EncryptionType | undefined;
    /**
     * Custom S3 endpoint URL (e.g., "http://minio:9000" for MinIO)
     */
    endpointUrl?: string | undefined;
    /**
     * Optional prefix for S3 keys (e.g., "flexprice-exports/")
     */
    keyPrefix?: string | undefined;
    /**
     * AWS region (e.g., "us-west-2")
     */
    region?: string | undefined;
    /**
     * Use path-style addressing instead of virtual-hosted-style (required for MinIO)
     */
    usePathStyle?: boolean | undefined;
};
/** @internal */
export declare const TypesS3JobConfig$inboundSchema: z.ZodType<TypesS3JobConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesS3JobConfig$Outbound = {
    bucket?: string | undefined;
    compression?: string | undefined;
    encryption?: string | undefined;
    endpoint_url?: string | undefined;
    key_prefix?: string | undefined;
    region?: string | undefined;
    use_path_style?: boolean | undefined;
};
/** @internal */
export declare const TypesS3JobConfig$outboundSchema: z.ZodType<TypesS3JobConfig$Outbound, z.ZodTypeDef, TypesS3JobConfig>;
export declare function typesS3JobConfigToJSON(typesS3JobConfig: TypesS3JobConfig): string;
export declare function typesS3JobConfigFromJSON(jsonString: string): SafeParseResult<TypesS3JobConfig, SDKValidationError>;
//# sourceMappingURL=typess3jobconfig.d.ts.map