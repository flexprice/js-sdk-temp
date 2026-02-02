import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesIntegrationEntityType } from "./types-integration-entity-type.js";
import { TypesStatus } from "./types-status.js";
export type DtoEntityIntegrationMappingResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesIntegrationEntityType | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    providerEntityId?: string | undefined;
    providerType?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoEntityIntegrationMappingResponse$inboundSchema: z.ZodType<DtoEntityIntegrationMappingResponse, z.ZodTypeDef, unknown>;
export declare function dtoEntityIntegrationMappingResponseFromJSON(jsonString: string): SafeParseResult<DtoEntityIntegrationMappingResponse, SDKValidationError>;
//# sourceMappingURL=dto-entity-integration-mapping-response.d.ts.map