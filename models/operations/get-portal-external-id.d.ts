import * as z from "zod/v3";
export type GetPortalExternalIdRequest = {
    /**
     * Customer External ID
     */
    externalId: string;
};
/** @internal */
export type GetPortalExternalIdRequest$Outbound = {
    external_id: string;
};
/** @internal */
export declare const GetPortalExternalIdRequest$outboundSchema: z.ZodType<GetPortalExternalIdRequest$Outbound, z.ZodTypeDef, GetPortalExternalIdRequest>;
export declare function getPortalExternalIdRequestToJSON(getPortalExternalIdRequest: GetPortalExternalIdRequest): string;
//# sourceMappingURL=get-portal-external-id.d.ts.map