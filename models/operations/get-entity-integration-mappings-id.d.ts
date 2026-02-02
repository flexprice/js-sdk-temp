import * as z from "zod/v3";
export type GetEntityIntegrationMappingsIdRequest = {
    /**
     * Entity integration mapping ID
     */
    id: string;
};
/** @internal */
export type GetEntityIntegrationMappingsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetEntityIntegrationMappingsIdRequest$outboundSchema: z.ZodType<GetEntityIntegrationMappingsIdRequest$Outbound, z.ZodTypeDef, GetEntityIntegrationMappingsIdRequest>;
export declare function getEntityIntegrationMappingsIdRequestToJSON(getEntityIntegrationMappingsIdRequest: GetEntityIntegrationMappingsIdRequest): string;
//# sourceMappingURL=get-entity-integration-mappings-id.d.ts.map