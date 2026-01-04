import * as z from "zod/v3";
export type GetPricesUnitsRequest = {
    /**
     * Filter by status
     */
    status?: string | undefined;
    /**
     * Limit number of results
     */
    limit?: number | undefined;
    /**
     * Offset for pagination
     */
    offset?: number | undefined;
    /**
     * Sort field
     */
    sort?: string | undefined;
    /**
     * Sort order (asc/desc)
     */
    order?: string | undefined;
};
/** @internal */
export type GetPricesUnitsRequest$Outbound = {
    status?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort?: string | undefined;
    order?: string | undefined;
};
/** @internal */
export declare const GetPricesUnitsRequest$outboundSchema: z.ZodType<GetPricesUnitsRequest$Outbound, z.ZodTypeDef, GetPricesUnitsRequest>;
export declare function getPricesUnitsRequestToJSON(getPricesUnitsRequest: GetPricesUnitsRequest): string;
//# sourceMappingURL=getpricesunits.d.ts.map