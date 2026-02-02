import * as z from "zod/v3";
export type DeleteCreditgrantsIdRequest = {
    /**
     * Credit Grant ID
     */
    id: string;
};
/** @internal */
export type DeleteCreditgrantsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteCreditgrantsIdRequest$outboundSchema: z.ZodType<DeleteCreditgrantsIdRequest$Outbound, z.ZodTypeDef, DeleteCreditgrantsIdRequest>;
export declare function deleteCreditgrantsIdRequestToJSON(deleteCreditgrantsIdRequest: DeleteCreditgrantsIdRequest): string;
//# sourceMappingURL=delete-creditgrants-id.d.ts.map