import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesSecretProvider } from "./types-secret-provider.js";
import { TypesStatus } from "./types-status.js";
import { TypesSyncConfig } from "./types-sync-config.js";
export type DtoConnectionResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
    providerType?: TypesSecretProvider | undefined;
    status?: TypesStatus | undefined;
    syncConfig?: TypesSyncConfig | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoConnectionResponse$inboundSchema: z.ZodType<DtoConnectionResponse, z.ZodTypeDef, unknown>;
export declare function dtoConnectionResponseFromJSON(jsonString: string): SafeParseResult<DtoConnectionResponse, SDKValidationError>;
//# sourceMappingURL=dto-connection-response.d.ts.map