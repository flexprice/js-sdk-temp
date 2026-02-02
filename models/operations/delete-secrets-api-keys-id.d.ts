import * as z from "zod/v3";
export type DeleteSecretsApiKeysIdRequest = {
    /**
     * API key ID
     */
    id: string;
};
/** @internal */
export type DeleteSecretsApiKeysIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteSecretsApiKeysIdRequest$outboundSchema: z.ZodType<DeleteSecretsApiKeysIdRequest$Outbound, z.ZodTypeDef, DeleteSecretsApiKeysIdRequest>;
export declare function deleteSecretsApiKeysIdRequestToJSON(deleteSecretsApiKeysIdRequest: DeleteSecretsApiKeysIdRequest): string;
//# sourceMappingURL=delete-secrets-api-keys-id.d.ts.map