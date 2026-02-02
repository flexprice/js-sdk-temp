import * as z from "zod/v3";
export type PostWebhooksHubspotTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
    /**
     * HubSpot webhook signature
     */
    xHubSpotSignatureV3: string;
};
/** @internal */
export type PostWebhooksHubspotTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
    "X-HubSpot-Signature-v3": string;
};
/** @internal */
export declare const PostWebhooksHubspotTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksHubspotTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksHubspotTenantIdEnvironmentIdRequest>;
export declare function postWebhooksHubspotTenantIdEnvironmentIdRequestToJSON(postWebhooksHubspotTenantIdEnvironmentIdRequest: PostWebhooksHubspotTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=post-webhooks-hubspot-tenant-id-environment-id.d.ts.map