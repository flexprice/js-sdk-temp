import * as z from "zod/v3";
import { TypesIntegrationEntityType } from "./types-integration-entity-type.js";
export type DtoCreateEntityIntegrationMappingRequest = {
    entityId: string;
    entityType: TypesIntegrationEntityType;
    metadata?: {
        [k: string]: any;
    } | undefined;
    providerEntityId: string;
    providerType: string;
};
/** @internal */
export type DtoCreateEntityIntegrationMappingRequest$Outbound = {
    entity_id: string;
    entity_type: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    provider_entity_id: string;
    provider_type: string;
};
/** @internal */
export declare const DtoCreateEntityIntegrationMappingRequest$outboundSchema: z.ZodType<DtoCreateEntityIntegrationMappingRequest$Outbound, z.ZodTypeDef, DtoCreateEntityIntegrationMappingRequest>;
export declare function dtoCreateEntityIntegrationMappingRequestToJSON(dtoCreateEntityIntegrationMappingRequest: DtoCreateEntityIntegrationMappingRequest): string;
//# sourceMappingURL=dto-create-entity-integration-mapping-request.d.ts.map