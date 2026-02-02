import * as z from "zod/v3";
export type PostWebhooksStripeTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
    /**
     * Stripe webhook signature
     */
    stripeSignature: string;
};
/** @internal */
export type PostWebhooksStripeTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
    "Stripe-Signature": string;
};
/** @internal */
export declare const PostWebhooksStripeTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksStripeTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksStripeTenantIdEnvironmentIdRequest>;
export declare function postWebhooksStripeTenantIdEnvironmentIdRequestToJSON(postWebhooksStripeTenantIdEnvironmentIdRequest: PostWebhooksStripeTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=post-webhooks-stripe-tenant-id-environment-id.d.ts.map