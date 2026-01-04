import * as z from "zod/v3";
export type DeleteTaxesAssociationsIdRequest = {
    /**
     * Tax Config ID
     */
    id: string;
};
/** @internal */
export type DeleteTaxesAssociationsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteTaxesAssociationsIdRequest$outboundSchema: z.ZodType<DeleteTaxesAssociationsIdRequest$Outbound, z.ZodTypeDef, DeleteTaxesAssociationsIdRequest>;
export declare function deleteTaxesAssociationsIdRequestToJSON(deleteTaxesAssociationsIdRequest: DeleteTaxesAssociationsIdRequest): string;
//# sourceMappingURL=deletetaxesassociationsid.d.ts.map