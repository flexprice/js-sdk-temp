import * as z from "zod/v3";
export type GetAddonsLookupLookupKeyRequest = {
    /**
     * Addon Lookup Key
     */
    lookupKey: string;
};
/** @internal */
export type GetAddonsLookupLookupKeyRequest$Outbound = {
    lookup_key: string;
};
/** @internal */
export declare const GetAddonsLookupLookupKeyRequest$outboundSchema: z.ZodType<GetAddonsLookupLookupKeyRequest$Outbound, z.ZodTypeDef, GetAddonsLookupLookupKeyRequest>;
export declare function getAddonsLookupLookupKeyRequestToJSON(getAddonsLookupLookupKeyRequest: GetAddonsLookupLookupKeyRequest): string;
//# sourceMappingURL=getaddonslookuplookupkey.d.ts.map