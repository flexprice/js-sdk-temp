import * as z from "zod/v3";
export type GetAddonsIdEntitlementsRequest = {
    /**
     * Addon ID
     */
    id: string;
};
/** @internal */
export type GetAddonsIdEntitlementsRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetAddonsIdEntitlementsRequest$outboundSchema: z.ZodType<GetAddonsIdEntitlementsRequest$Outbound, z.ZodTypeDef, GetAddonsIdEntitlementsRequest>;
export declare function getAddonsIdEntitlementsRequestToJSON(getAddonsIdEntitlementsRequest: GetAddonsIdEntitlementsRequest): string;
//# sourceMappingURL=get-addons-id-entitlements.d.ts.map