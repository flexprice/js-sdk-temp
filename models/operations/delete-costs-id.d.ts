import * as z from "zod/v3";
export type DeleteCostsIdRequest = {
    /**
     * Costsheet ID
     */
    id: string;
};
/** @internal */
export type DeleteCostsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteCostsIdRequest$outboundSchema: z.ZodType<DeleteCostsIdRequest$Outbound, z.ZodTypeDef, DeleteCostsIdRequest>;
export declare function deleteCostsIdRequestToJSON(deleteCostsIdRequest: DeleteCostsIdRequest): string;
//# sourceMappingURL=delete-costs-id.d.ts.map