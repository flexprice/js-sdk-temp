import * as z from "zod/v3";
export type TypesMoyasarConnectionMetadata = {
    /**
     * Moyasar Publishable Key (encrypted, for frontend use)
     */
    publishableKey?: string | undefined;
    /**
     * Moyasar Secret Key (encrypted)
     */
    secretKey?: string | undefined;
    /**
     * Moyasar Webhook Secret (encrypted, optional)
     */
    webhookSecret?: string | undefined;
};
/** @internal */
export type TypesMoyasarConnectionMetadata$Outbound = {
    publishable_key?: string | undefined;
    secret_key?: string | undefined;
    webhook_secret?: string | undefined;
};
/** @internal */
export declare const TypesMoyasarConnectionMetadata$outboundSchema: z.ZodType<TypesMoyasarConnectionMetadata$Outbound, z.ZodTypeDef, TypesMoyasarConnectionMetadata>;
export declare function typesMoyasarConnectionMetadataToJSON(typesMoyasarConnectionMetadata: TypesMoyasarConnectionMetadata): string;
//# sourceMappingURL=types-moyasar-connection-metadata.d.ts.map