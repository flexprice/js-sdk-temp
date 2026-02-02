import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSecretProvider: {
    readonly Flexprice: "flexprice";
    readonly Stripe: "stripe";
    readonly S3: "s3";
    readonly Hubspot: "hubspot";
    readonly Razorpay: "razorpay";
    readonly Chargebee: "chargebee";
    readonly Quickbooks: "quickbooks";
    readonly Nomod: "nomod";
    readonly Moyasar: "moyasar";
};
export type TypesSecretProvider = ClosedEnum<typeof TypesSecretProvider>;
/** @internal */
export declare const TypesSecretProvider$inboundSchema: z.ZodNativeEnum<typeof TypesSecretProvider>;
/** @internal */
export declare const TypesSecretProvider$outboundSchema: z.ZodNativeEnum<typeof TypesSecretProvider>;
//# sourceMappingURL=types-secret-provider.d.ts.map