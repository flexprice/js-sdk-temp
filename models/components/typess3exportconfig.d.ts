import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesS3CompressionType } from "./typess3compressiontype.js";
import { TypesS3EncryptionType } from "./typess3encryptiontype.js";
export type TypesS3ExportConfig = {
    /**
     * S3 bucket name
     */
    bucket?: string | undefined;
    compression?: TypesS3CompressionType | undefined;
    encryption?: TypesS3EncryptionType | undefined;
    /**
     * If true, use Flexprice-managed S3 credentials instead of user-provided
     */
    isFlexpriceManaged?: boolean | undefined;
    /**
     * Optional prefix for S3 keys (e.g., "flexprice-exports/")
     */
    keyPrefix?: string | undefined;
    /**
     * AWS region (e.g., "us-west-2")
     */
    region?: string | undefined;
};
/** @internal */
export declare const TypesS3ExportConfig$inboundSchema: z.ZodType<TypesS3ExportConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesS3ExportConfig$Outbound = {
    bucket?: string | undefined;
    compression?: string | undefined;
    encryption?: string | undefined;
    is_flexprice_managed?: boolean | undefined;
    key_prefix?: string | undefined;
    region?: string | undefined;
};
/** @internal */
export declare const TypesS3ExportConfig$outboundSchema: z.ZodType<TypesS3ExportConfig$Outbound, z.ZodTypeDef, TypesS3ExportConfig>;
export declare function typesS3ExportConfigToJSON(typesS3ExportConfig: TypesS3ExportConfig): string;
export declare function typesS3ExportConfigFromJSON(jsonString: string): SafeParseResult<TypesS3ExportConfig, SDKValidationError>;
//# sourceMappingURL=typess3exportconfig.d.ts.map