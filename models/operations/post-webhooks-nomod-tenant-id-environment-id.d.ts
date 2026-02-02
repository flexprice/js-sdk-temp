import * as z from "zod/v3";
export type PostWebhooksNomodTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
    /**
     * Nomod webhook secret (if configured)
     */
    xApiKey?: string | undefined;
};
/** @internal */
export type PostWebhooksNomodTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
    "X-API-KEY"?: string | undefined;
};
/** @internal */
export declare const PostWebhooksNomodTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksNomodTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksNomodTenantIdEnvironmentIdRequest>;
export declare function postWebhooksNomodTenantIdEnvironmentIdRequestToJSON(postWebhooksNomodTenantIdEnvironmentIdRequest: PostWebhooksNomodTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=post-webhooks-nomod-tenant-id-environment-id.d.ts.map