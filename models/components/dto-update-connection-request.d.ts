import * as z from "zod/v3";
import { TypesConnectionMetadata, TypesConnectionMetadata$Outbound } from "./types-connection-metadata.js";
import { TypesSyncConfig, TypesSyncConfig$Outbound } from "./types-sync-config.js";
export type DtoUpdateConnectionRequest = {
    encryptedSecretData?: TypesConnectionMetadata | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
    syncConfig?: TypesSyncConfig | undefined;
};
/** @internal */
export type DtoUpdateConnectionRequest$Outbound = {
    encrypted_secret_data?: TypesConnectionMetadata$Outbound | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
    sync_config?: TypesSyncConfig$Outbound | undefined;
};
/** @internal */
export declare const DtoUpdateConnectionRequest$outboundSchema: z.ZodType<DtoUpdateConnectionRequest$Outbound, z.ZodTypeDef, DtoUpdateConnectionRequest>;
export declare function dtoUpdateConnectionRequestToJSON(dtoUpdateConnectionRequest: DtoUpdateConnectionRequest): string;
//# sourceMappingURL=dto-update-connection-request.d.ts.map