import * as z from "zod/v3";
export type GetSecretsApiKeysRequest = {
    /**
     * Limit
     */
    limit?: number | undefined;
    /**
     * Offset
     */
    offset?: number | undefined;
    /**
     * Status (published/archived)
     */
    status?: string | undefined;
};
/** @internal */
export type GetSecretsApiKeysRequest$Outbound = {
    limit?: number | undefined;
    offset?: number | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetSecretsApiKeysRequest$outboundSchema: z.ZodType<GetSecretsApiKeysRequest$Outbound, z.ZodTypeDef, GetSecretsApiKeysRequest>;
export declare function getSecretsApiKeysRequestToJSON(getSecretsApiKeysRequest: GetSecretsApiKeysRequest): string;
//# sourceMappingURL=get-secrets-api-keys.d.ts.map