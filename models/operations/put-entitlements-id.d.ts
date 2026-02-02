import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutEntitlementsIdRequest = {
    /**
     * Entitlement ID
     */
    id: string;
    /**
     * Entitlement configuration
     */
    body: components.DtoUpdateEntitlementRequest;
};
/** @internal */
export type PutEntitlementsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateEntitlementRequest$Outbound;
};
/** @internal */
export declare const PutEntitlementsIdRequest$outboundSchema: z.ZodType<PutEntitlementsIdRequest$Outbound, z.ZodTypeDef, PutEntitlementsIdRequest>;
export declare function putEntitlementsIdRequestToJSON(putEntitlementsIdRequest: PutEntitlementsIdRequest): string;
//# sourceMappingURL=put-entitlements-id.d.ts.map