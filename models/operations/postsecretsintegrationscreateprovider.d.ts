import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSecretsIntegrationsCreateProviderRequest = {
    /**
     * Integration provider
     */
    provider: string;
    /**
     * Integration creation request
     */
    body: components.DtoCreateIntegrationRequest;
};
/** @internal */
export type PostSecretsIntegrationsCreateProviderRequest$Outbound = {
    provider: string;
    body: components.DtoCreateIntegrationRequest$Outbound;
};
/** @internal */
export declare const PostSecretsIntegrationsCreateProviderRequest$outboundSchema: z.ZodType<PostSecretsIntegrationsCreateProviderRequest$Outbound, z.ZodTypeDef, PostSecretsIntegrationsCreateProviderRequest>;
export declare function postSecretsIntegrationsCreateProviderRequestToJSON(postSecretsIntegrationsCreateProviderRequest: PostSecretsIntegrationsCreateProviderRequest): string;
//# sourceMappingURL=postsecretsintegrationscreateprovider.d.ts.map