import * as z from "zod/v3";
export type DeleteTaxesRatesIdRequest = {
    /**
     * Tax rate ID
     */
    id: string;
};
/** @internal */
export type DeleteTaxesRatesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteTaxesRatesIdRequest$outboundSchema: z.ZodType<DeleteTaxesRatesIdRequest$Outbound, z.ZodTypeDef, DeleteTaxesRatesIdRequest>;
export declare function deleteTaxesRatesIdRequestToJSON(deleteTaxesRatesIdRequest: DeleteTaxesRatesIdRequest): string;
//# sourceMappingURL=deletetaxesratesid.d.ts.map