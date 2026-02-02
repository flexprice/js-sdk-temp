import * as z from "zod/v3";
export type GetCostsIdRequest = {
    /**
     * Costsheet ID
     */
    id: string;
    /**
     * Comma-separated list of fields to expand (e.g., 'prices')
     */
    expand?: string | undefined;
};
/** @internal */
export type GetCostsIdRequest$Outbound = {
    id: string;
    expand?: string | undefined;
};
/** @internal */
export declare const GetCostsIdRequest$outboundSchema: z.ZodType<GetCostsIdRequest$Outbound, z.ZodTypeDef, GetCostsIdRequest>;
export declare function getCostsIdRequestToJSON(getCostsIdRequest: GetCostsIdRequest): string;
//# sourceMappingURL=get-costs-id.d.ts.map