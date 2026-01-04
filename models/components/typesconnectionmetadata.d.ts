import * as z from "zod/v3";
import { TypesChargebeeConnectionMetadata, TypesChargebeeConnectionMetadata$Outbound } from "./typeschargebeeconnectionmetadata.js";
import { TypesConnectionSettings, TypesConnectionSettings$Outbound } from "./typesconnectionsettings.js";
import { TypesGenericConnectionMetadata, TypesGenericConnectionMetadata$Outbound } from "./typesgenericconnectionmetadata.js";
import { TypesHubSpotConnectionMetadata, TypesHubSpotConnectionMetadata$Outbound } from "./typeshubspotconnectionmetadata.js";
import { TypesNomodConnectionMetadata, TypesNomodConnectionMetadata$Outbound } from "./typesnomodconnectionmetadata.js";
import { TypesQuickBooksConnectionMetadata, TypesQuickBooksConnectionMetadata$Outbound } from "./typesquickbooksconnectionmetadata.js";
import { TypesRazorpayConnectionMetadata, TypesRazorpayConnectionMetadata$Outbound } from "./typesrazorpayconnectionmetadata.js";
import { TypesS3ConnectionMetadata, TypesS3ConnectionMetadata$Outbound } from "./typess3connectionmetadata.js";
import { TypesStripeConnectionMetadata, TypesStripeConnectionMetadata$Outbound } from "./typesstripeconnectionmetadata.js";
export type TypesConnectionMetadata = {
    chargebee?: TypesChargebeeConnectionMetadata | undefined;
    generic?: TypesGenericConnectionMetadata | undefined;
    hubspot?: TypesHubSpotConnectionMetadata | undefined;
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
//# sourceMappingURL=typesconnectionmetadata.d.ts.map