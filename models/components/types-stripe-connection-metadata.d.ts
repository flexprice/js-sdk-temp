import * as z from "zod/v3";
export type TypesStripeConnectionMetadata = {
    accountId?: string | undefined;
    publishableKey?: string | undefined;
    secretKey?: string | undefined;
    webhookSecret?: string | undefined;
};
/** @internal */
export type TypesStripeConnectionMetadata$Outbound = {
    account_id?: string | undefined;
    publishable_key?: string | undefined;
    secret_key?: string | undefined;
    webhook_secret?: string | undefined;
};
/** @internal */
export declare const TypesStripeConnectionMetadata$outboundSchema: z.ZodType<TypesStripeConnectionMetadata$Outbound, z.ZodTypeDef, TypesStripeConnectionMetadata>;
export declare function typesStripeConnectionMetadataToJSON(typesStripeConnectionMetadata: TypesStripeConnectionMetadata): string;
//# sourceMappingURL=types-stripe-connection-metadata.d.ts.map