import * as z from "zod/v3";
export type DeleteSecretsIntegrationsIdRequest = {
    /**
     * Integration ID
     */
    id: string;
};
/** @internal */
export type DeleteSecretsIntegrationsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteSecretsIntegrationsIdRequest$outboundSchema: z.ZodType<DeleteSecretsIntegrationsIdRequest$Outbound, z.ZodTypeDef, DeleteSecretsIntegrationsIdRequest>;
export declare function deleteSecretsIntegrationsIdRequestToJSON(deleteSecretsIntegrationsIdRequest: DeleteSecretsIntegrationsIdRequest): string;
//# sourceMappingURL=delete-secrets-integrations-id.d.ts.map