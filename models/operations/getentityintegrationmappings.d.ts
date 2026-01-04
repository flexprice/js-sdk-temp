import * as z from "zod/v3";
export type GetEntityIntegrationMappingsRequest = {
    /**
     * Filter by FlexPrice entity ID
     */
    entityId?: string | undefined;
    /**
     * Filter by entity type
     */
    entityType?: string | undefined;
    /**
     * Filter by provider type
     */
    providerType?: string | undefined;
    /**
     * Filter by provider entity ID
     */
    providerEntityId?: string | undefined;
    /**
     * Number of results to return (default: 20, max: 100)
     */
    limit?: number | undefined;
    /**
     * Pagination offset (default: 0)
     */
    offset?: number | undefined;
};
/** @internal */
export type GetEntityIntegrationMappingsRequest$Outbound = {
    entity_id?: string | undefined;
    entity_type?: string | undefined;
    provider_type?: string | undefined;
    provider_entity_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
};
/** @internal */
export declare const GetEntityIntegrationMappingsRequest$outboundSchema: z.ZodType<GetEntityIntegrationMappingsRequest$Outbound, z.ZodTypeDef, GetEntityIntegrationMappingsRequest>;
export declare function getEntityIntegrationMappingsRequestToJSON(getEntityIntegrationMappingsRequest: GetEntityIntegrationMappingsRequest): string;
//# sourceMappingURL=getentityintegrationmappings.d.ts.map