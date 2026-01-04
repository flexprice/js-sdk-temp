import * as z from "zod/v3";
export type DeleteEntityIntegrationMappingsIdRequest = {
    /**
     * Entity integration mapping ID
     */
    id: string;
};
/** @internal */
export type DeleteEntityIntegrationMappingsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteEntityIntegrationMappingsIdRequest$outboundSchema: z.ZodType<DeleteEntityIntegrationMappingsIdRequest$Outbound, z.ZodTypeDef, DeleteEntityIntegrationMappingsIdRequest>;
export declare function deleteEntityIntegrationMappingsIdRequestToJSON(deleteEntityIntegrationMappingsIdRequest: DeleteEntityIntegrationMappingsIdRequest): string;
//# sourceMappingURL=deleteentityintegrationmappingsid.d.ts.map