import * as z from "zod/v3";
export type GetTaxesRatesIdRequest = {
    /**
     * Tax rate ID
     */
    id: string;
};
/** @internal */
export type GetTaxesRatesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetTaxesRatesIdRequest$outboundSchema: z.ZodType<GetTaxesRatesIdRequest$Outbound, z.ZodTypeDef, GetTaxesRatesIdRequest>;
export declare function getTaxesRatesIdRequestToJSON(getTaxesRatesIdRequest: GetTaxesRatesIdRequest): string;
//# sourceMappingURL=get-taxes-rates-id.d.ts.map