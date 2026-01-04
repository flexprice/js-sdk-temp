import * as z from "zod/v3";
export type GetTaxesAssociationsIdRequest = {
    /**
     * Tax Config ID
     */
    id: string;
};
/** @internal */
export type GetTaxesAssociationsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetTaxesAssociationsIdRequest$outboundSchema: z.ZodType<GetTaxesAssociationsIdRequest$Outbound, z.ZodTypeDef, GetTaxesAssociationsIdRequest>;
export declare function getTaxesAssociationsIdRequestToJSON(getTaxesAssociationsIdRequest: GetTaxesAssociationsIdRequest): string;
//# sourceMappingURL=gettaxesassociationsid.d.ts.map