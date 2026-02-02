import * as z from "zod/v3";
export type GetTaxesAssociationsRequest = {
    /**
     * Entity Type
     */
    entityType?: string | undefined;
    /**
     * Entity ID
     */
    entityId?: string | undefined;
    /**
     * Tax Rate ID
     */
    taxRateId?: string | undefined;
};
/** @internal */
export type GetTaxesAssociationsRequest$Outbound = {
    entity_type?: string | undefined;
    entity_id?: string | undefined;
    tax_rate_id?: string | undefined;
};
/** @internal */
export declare const GetTaxesAssociationsRequest$outboundSchema: z.ZodType<GetTaxesAssociationsRequest$Outbound, z.ZodTypeDef, GetTaxesAssociationsRequest>;
export declare function getTaxesAssociationsRequestToJSON(getTaxesAssociationsRequest: GetTaxesAssociationsRequest): string;
//# sourceMappingURL=get-taxes-associations.d.ts.map