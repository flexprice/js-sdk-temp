import * as z from "zod/v3";
export type GetTenantsIdRequest = {
    /**
     * Tenant ID
     */
    id: string;
};
/** @internal */
export type GetTenantsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetTenantsIdRequest$outboundSchema: z.ZodType<GetTenantsIdRequest$Outbound, z.ZodTypeDef, GetTenantsIdRequest>;
export declare function getTenantsIdRequestToJSON(getTenantsIdRequest: GetTenantsIdRequest): string;
//# sourceMappingURL=get-tenants-id.d.ts.map