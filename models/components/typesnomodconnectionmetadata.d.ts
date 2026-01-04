import * as z from "zod/v3";
export type TypesNomodConnectionMetadata = {
    /**
     * Nomod API Key (encrypted)
     */
    apiKey?: string | undefined;
    /**
     * Basic Auth secret for webhooks (encrypted, optional)
     */
    webhookSecret?: string | undefined;
};
/** @internal */
export type TypesNomodConnectionMetadata$Outbound = {
    api_key?: string | undefined;
    webhook_secret?: string | undefined;
};
/** @internal */
export declare const TypesNomodConnectionMetadata$outboundSchema: z.ZodType<TypesNomodConnectionMetadata$Outbound, z.ZodTypeDef, TypesNomodConnectionMetadata>;
export declare function typesNomodConnectionMetadataToJSON(typesNomodConnectionMetadata: TypesNomodConnectionMetadata): string;
//# sourceMappingURL=typesnomodconnectionmetadata.d.ts.map