import * as z from "zod/v3";
export type PostWebhooksRazorpayTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
    /**
     * Razorpay webhook signature
     */
    xRazorpaySignature: string;
};
/** @internal */
export type PostWebhooksRazorpayTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
    "X-Razorpay-Signature": string;
};
/** @internal */
export declare const PostWebhooksRazorpayTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksRazorpayTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksRazorpayTenantIdEnvironmentIdRequest>;
export declare function postWebhooksRazorpayTenantIdEnvironmentIdRequestToJSON(postWebhooksRazorpayTenantIdEnvironmentIdRequest: PostWebhooksRazorpayTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=postwebhooksrazorpaytenantidenvironmentid.d.ts.map