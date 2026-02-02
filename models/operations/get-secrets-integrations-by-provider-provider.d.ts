import * as z from "zod/v3";
export type GetSecretsIntegrationsByProviderProviderRequest = {
    /**
     * Integration provider
     */
    provider: string;
};
/** @internal */
export type GetSecretsIntegrationsByProviderProviderRequest$Outbound = {
    provider: string;
};
/** @internal */
export declare const GetSecretsIntegrationsByProviderProviderRequest$outboundSchema: z.ZodType<GetSecretsIntegrationsByProviderProviderRequest$Outbound, z.ZodTypeDef, GetSecretsIntegrationsByProviderProviderRequest>;
export declare function getSecretsIntegrationsByProviderProviderRequestToJSON(getSecretsIntegrationsByProviderProviderRequest: GetSecretsIntegrationsByProviderProviderRequest): string;
//# sourceMappingURL=get-secrets-integrations-by-provider-provider.d.ts.map