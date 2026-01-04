import * as z from "zod/v3";
export type PostWebhooksQuickbooksTenantIdEnvironmentIdRequest = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Environment ID
     */
    environmentId: string;
    /**
     * QuickBooks webhook signature
     */
    intuitSignature?: string | undefined;
};
/** @internal */
export type PostWebhooksQuickbooksTenantIdEnvironmentIdRequest$Outbound = {
    tenant_id: string;
    environment_id: string;
    "intuit-signature"?: string | undefined;
};
/** @internal */
export declare const PostWebhooksQuickbooksTenantIdEnvironmentIdRequest$outboundSchema: z.ZodType<PostWebhooksQuickbooksTenantIdEnvironmentIdRequest$Outbound, z.ZodTypeDef, PostWebhooksQuickbooksTenantIdEnvironmentIdRequest>;
export declare function postWebhooksQuickbooksTenantIdEnvironmentIdRequestToJSON(postWebhooksQuickbooksTenantIdEnvironmentIdRequest: PostWebhooksQuickbooksTenantIdEnvironmentIdRequest): string;
//# sourceMappingURL=postwebhooksquickbookstenantidenvironmentid.d.ts.map