import * as z from "zod/v3";
export type GetPlansIdEntitlementsRequest = {
    /**
     * Plan ID
     */
    id: string;
};
/** @internal */
export type GetPlansIdEntitlementsRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetPlansIdEntitlementsRequest$outboundSchema: z.ZodType<GetPlansIdEntitlementsRequest$Outbound, z.ZodTypeDef, GetPlansIdEntitlementsRequest>;
export declare function getPlansIdEntitlementsRequestToJSON(getPlansIdEntitlementsRequest: GetPlansIdEntitlementsRequest): string;
//# sourceMappingURL=get-plans-id-entitlements.d.ts.map