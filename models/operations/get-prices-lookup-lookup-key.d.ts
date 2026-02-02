import * as z from "zod/v3";
export type GetPricesLookupLookupKeyRequest = {
    /**
     * Lookup key
     */
    lookupKey: string;
};
/** @internal */
export type GetPricesLookupLookupKeyRequest$Outbound = {
    lookup_key: string;
};
/** @internal */
export declare const GetPricesLookupLookupKeyRequest$outboundSchema: z.ZodType<GetPricesLookupLookupKeyRequest$Outbound, z.ZodTypeDef, GetPricesLookupLookupKeyRequest>;
export declare function getPricesLookupLookupKeyRequestToJSON(getPricesLookupLookupKeyRequest: GetPricesLookupLookupKeyRequest): string;
//# sourceMappingURL=get-prices-lookup-lookup-key.d.ts.map