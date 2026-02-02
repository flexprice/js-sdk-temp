import * as z from "zod/v3";
import { TypesChargebeeConnectionMetadata, TypesChargebeeConnectionMetadata$Outbound } from "./types-chargebee-connection-metadata.js";
import { TypesConnectionSettings, TypesConnectionSettings$Outbound } from "./types-connection-settings.js";
import { TypesGenericConnectionMetadata, TypesGenericConnectionMetadata$Outbound } from "./types-generic-connection-metadata.js";
import { TypesHubSpotConnectionMetadata, TypesHubSpotConnectionMetadata$Outbound } from "./types-hub-spot-connection-metadata.js";
import { TypesMoyasarConnectionMetadata, TypesMoyasarConnectionMetadata$Outbound } from "./types-moyasar-connection-metadata.js";
import { TypesNomodConnectionMetadata, TypesNomodConnectionMetadata$Outbound } from "./types-nomod-connection-metadata.js";
import { TypesQuickBooksConnectionMetadata, TypesQuickBooksConnectionMetadata$Outbound } from "./types-quick-books-connection-metadata.js";
import { TypesRazorpayConnectionMetadata, TypesRazorpayConnectionMetadata$Outbound } from "./types-razorpay-connection-metadata.js";
import { TypesS3ConnectionMetadata, TypesS3ConnectionMetadata$Outbound } from "./types-s3-connection-metadata.js";
import { TypesStripeConnectionMetadata, TypesStripeConnectionMetadata$Outbound } from "./types-stripe-connection-metadata.js";
export type TypesConnectionMetadata = {
    chargebee?: TypesChargebeeConnectionMetadata | undefined;
    generic?: TypesGenericConnectionMetadata | undefined;
    hubspot?: TypesHubSpotConnectionMetadata | undefined;
    moyasar?: TypesMoyasarConnectionMetadata | undefined;
    nomod?: TypesNomodConnectionMetadata | undefined;
    quickbooks?: TypesQuickBooksConnectionMetadata | undefined;
    razorpay?: TypesRazorpayConnectionMetadata | undefined;
    s3?: TypesS3ConnectionMetadata | undefined;
    settings?: TypesConnectionSettings | undefined;
    stripe?: TypesStripeConnectionMetadata | undefined;
};
/** @internal */
export type TypesConnectionMetadata$Outbound = {
    chargebee?: TypesChargebeeConnectionMetadata$Outbound | undefined;
    generic?: TypesGenericConnectionMetadata$Outbound | undefined;
    hubspot?: TypesHubSpotConnectionMetadata$Outbound | undefined;
    moyasar?: TypesMoyasarConnectionMetadata$Outbound | undefined;
    nomod?: TypesNomodConnectionMetadata$Outbound | undefined;
    quickbooks?: TypesQuickBooksConnectionMetadata$Outbound | undefined;
    razorpay?: TypesRazorpayConnectionMetadata$Outbound | undefined;
    s3?: TypesS3ConnectionMetadata$Outbound | undefined;
    settings?: TypesConnectionSettings$Outbound | undefined;
    stripe?: TypesStripeConnectionMetadata$Outbound | undefined;
};
/** @internal */
export declare const TypesConnectionMetadata$outboundSchema: z.ZodType<TypesConnectionMetadata$Outbound, z.ZodTypeDef, TypesConnectionMetadata>;
export declare function typesConnectionMetadataToJSON(typesConnectionMetadata: TypesConnectionMetadata): string;
//# sourceMappingURL=types-connection-metadata.d.ts.map