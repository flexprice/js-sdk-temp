import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type TypesEntitySyncConfig = {
    /**
     * Inbound from external provider to FlexPrice
     */
    inbound?: boolean | undefined;
    /**
     * Outbound from FlexPrice to external provider
     */
    outbound?: boolean | undefined;
};
/** @internal */
export declare const TypesEntitySyncConfig$inboundSchema: z.ZodType<TypesEntitySyncConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesEntitySyncConfig$Outbound = {
    inbound?: boolean | undefined;
    outbound?: boolean | undefined;
};
/** @internal */
export declare const TypesEntitySyncConfig$outboundSchema: z.ZodType<TypesEntitySyncConfig$Outbound, z.ZodTypeDef, TypesEntitySyncConfig>;
export declare function typesEntitySyncConfigToJSON(typesEntitySyncConfig: TypesEntitySyncConfig): string;
export declare function typesEntitySyncConfigFromJSON(jsonString: string): SafeParseResult<TypesEntitySyncConfig, SDKValidationError>;
//# sourceMappingURL=types-entity-sync-config.d.ts.map