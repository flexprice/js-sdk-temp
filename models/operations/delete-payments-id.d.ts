import * as z from "zod/v3";
export type DeletePaymentsIdRequest = {
    /**
     * Payment ID
     */
    id: string;
};
/** @internal */
export type DeletePaymentsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeletePaymentsIdRequest$outboundSchema: z.ZodType<DeletePaymentsIdRequest$Outbound, z.ZodTypeDef, DeletePaymentsIdRequest>;
export declare function deletePaymentsIdRequestToJSON(deletePaymentsIdRequest: DeletePaymentsIdRequest): string;
//# sourceMappingURL=delete-payments-id.d.ts.map