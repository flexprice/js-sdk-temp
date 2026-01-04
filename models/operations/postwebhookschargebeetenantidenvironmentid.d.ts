import * as z from "zod/v3";
export type PostWebhooksChargebeeTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
};
/** @internal */
export type PostWebhooksChargebeeTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
};
/** @internal */
export declare const PostWebhooksChargebeeTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksChargebeeTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksChargebeeTenantIdEnvironmentIdRequest>;
export declare function postWebhooksChargebeeTenantIdEnvironmentIdRequestToJSON(postWebhooksChargebeeTenantIdEnvironmentIdRequest: PostWebhooksChargebeeTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=postwebhookschargebeetenantidenvironmentid.d.ts.map