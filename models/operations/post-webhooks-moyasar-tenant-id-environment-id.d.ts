import * as z from "zod/v3";
export type PostWebhooksMoyasarTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
    /**
     * Moyasar webhook signature
     */
    xMoyasarSignature?: string | undefined;
};
/** @internal */
export type PostWebhooksMoyasarTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
    "X-Moyasar-Signature"?: string | undefined;
};
/** @internal */
export declare const PostWebhooksMoyasarTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksMoyasarTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksMoyasarTenantIdEnvironmentIdRequest>;
export declare function postWebhooksMoyasarTenantIdEnvironmentIdRequestToJSON(postWebhooksMoyasarTenantIdEnvironmentIdRequest: PostWebhooksMoyasarTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=post-webhooks-moyasar-tenant-id-environment-id.d.ts.map