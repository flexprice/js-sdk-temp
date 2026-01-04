import * as z from "zod/v3";
export type DeleteEntitlementsIdRequest = {
    /**
     * Entitlement ID
     */
    id: string;
};
/** @internal */
export type DeleteEntitlementsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteEntitlementsIdRequest$outboundSchema: z.ZodType<DeleteEntitlementsIdRequest$Outbound, z.ZodTypeDef, DeleteEntitlementsIdRequest>;
export declare function deleteEntitlementsIdRequestToJSON(deleteEntitlementsIdRequest: DeleteEntitlementsIdRequest): string;
//# sourceMappingURL=deleteentitlementsid.d.ts.map