import * as z from "zod/v3";
export type TypesChargebeeConnectionMetadata = {
    /**
     * Chargebee API key (encrypted)
     */
    apiKey?: string | undefined;
    /**
     * Chargebee site name (not encrypted)
     */
    site?: string | undefined;
    /**
     * Basic Auth password for webhooks (encrypted)
     */
    webhookPassword?: string | undefined;
    /**
     * Chargebee Webhook Secret (encrypted, optional, NOT USED in v2)
     */
    webhookSecret?: string | undefined;
    /**
     * Basic Auth username for webhooks (encrypted)
     */
    webhookUsername?: string | undefined;
};
/** @internal */
export type TypesChargebeeConnectionMetadata$Outbound = {
    api_key?: string | undefined;
    site?: string | undefined;
    webhook_password?: string | undefined;
    webhook_secret?: string | undefined;
    webhook_username?: string | undefined;
};
/** @internal */
export declare const TypesChargebeeConnectionMetadata$outboundSchema: z.ZodType<TypesChargebeeConnectionMetadata$Outbound, z.ZodTypeDef, TypesChargebeeConnectionMetadata>;
export declare function typesChargebeeConnectionMetadataToJSON(typesChargebeeConnectionMetadata: TypesChargebeeConnectionMetadata): string;
//# sourceMappingURL=types-chargebee-connection-metadata.d.ts.map