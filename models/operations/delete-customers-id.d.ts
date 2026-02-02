import * as z from "zod/v3";
export type DeleteCustomersIdRequest = {
    /**
     * Customer ID
     */
    id: string;
};
/** @internal */
export type DeleteCustomersIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteCustomersIdRequest$outboundSchema: z.ZodType<DeleteCustomersIdRequest$Outbound, z.ZodTypeDef, DeleteCustomersIdRequest>;
export declare function deleteCustomersIdRequestToJSON(deleteCustomersIdRequest: DeleteCustomersIdRequest): string;
//# sourceMappingURL=delete-customers-id.d.ts.map