import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesEntitySyncConfig, TypesEntitySyncConfig$Outbound } from "./typesentitysyncconfig.js";
export type TypesSyncConfig = {
    deal?: TypesEntitySyncConfig | undefined;
    invoice?: TypesEntitySyncConfig | undefined;
    payment?: TypesEntitySyncConfig | undefined;
    plan?: TypesEntitySyncConfig | undefined;
    quote?: TypesEntitySyncConfig | undefined;
    subscription?: TypesEntitySyncConfig | undefined;
};
/** @internal */
export declare const TypesSyncConfig$inboundSchema: z.ZodType<TypesSyncConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesSyncConfig$Outbound = {
    deal?: TypesEntitySyncConfig$Outbound | undefined;
    invoice?: TypesEntitySyncConfig$Outbound | undefined;
    payment?: TypesEntitySyncConfig$Outbound | undefined;
    plan?: TypesEntitySyncConfig$Outbound | undefined;
    quote?: TypesEntitySyncConfig$Outbound | undefined;
    subscription?: TypesEntitySyncConfig$Outbound | undefined;
};
/** @internal */
export declare const TypesSyncConfig$outboundSchema: z.ZodType<TypesSyncConfig$Outbound, z.ZodTypeDef, TypesSyncConfig>;
export declare function typesSyncConfigToJSON(typesSyncConfig: TypesSyncConfig): string;
export declare function typesSyncConfigFromJSON(jsonString: string): SafeParseResult<TypesSyncConfig, SDKValidationError>;
//# sourceMappingURL=typessyncconfig.d.ts.map