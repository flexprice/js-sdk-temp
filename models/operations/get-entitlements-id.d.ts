import * as z from "zod/v3";
export type GetEntitlementsIdRequest = {
    /**
     * Entitlement ID
     */
    id: string;
};
/** @internal */
export type GetEntitlementsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetEntitlementsIdRequest$outboundSchema: z.ZodType<GetEntitlementsIdRequest$Outbound, z.ZodTypeDef, GetEntitlementsIdRequest>;
export declare function getEntitlementsIdRequestToJSON(getEntitlementsIdRequest: GetEntitlementsIdRequest): string;
//# sourceMappingURL=get-entitlements-id.d.ts.map