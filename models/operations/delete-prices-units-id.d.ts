import * as z from "zod/v3";
export type DeletePricesUnitsIdRequest = {
    /**
     * Price unit ID
     */
    id: string;
};
/** @internal */
export type DeletePricesUnitsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeletePricesUnitsIdRequest$outboundSchema: z.ZodType<DeletePricesUnitsIdRequest$Outbound, z.ZodTypeDef, DeletePricesUnitsIdRequest>;
export declare function deletePricesUnitsIdRequestToJSON(deletePricesUnitsIdRequest: DeletePricesUnitsIdRequest): string;
//# sourceMappingURL=delete-prices-units-id.d.ts.map