import * as z from "zod/v3";
export type TypesRazorpayConnectionMetadata = {
    /**
     * Razorpay Key ID (encrypted)
     */
    keyId?: string | undefined;
    /**
     * Razorpay Secret Key (encrypted)
     */
    secretKey?: string | undefined;
    /**
     * Razorpay Webhook Secret (encrypted, optional)
     */
    webhookSecret?: string | undefined;
};
/** @internal */
export type TypesRazorpayConnectionMetadata$Outbound = {
    key_id?: string | undefined;
    secret_key?: string | undefined;
    webhook_secret?: string | undefined;
};
/** @internal */
export declare const TypesRazorpayConnectionMetadata$outboundSchema: z.ZodType<TypesRazorpayConnectionMetadata$Outbound, z.ZodTypeDef, TypesRazorpayConnectionMetadata>;
export declare function typesRazorpayConnectionMetadataToJSON(typesRazorpayConnectionMetadata: TypesRazorpayConnectionMetadata): string;
//# sourceMappingURL=types-razorpay-connection-metadata.d.ts.map