import * as z from "zod/v3";
export type DeletePlansIdRequest = {
    /**
     * Plan ID
     */
    id: string;
};
/** @internal */
export type DeletePlansIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeletePlansIdRequest$outboundSchema: z.ZodType<DeletePlansIdRequest$Outbound, z.ZodTypeDef, DeletePlansIdRequest>;
export declare function deletePlansIdRequestToJSON(deletePlansIdRequest: DeletePlansIdRequest): string;
//# sourceMappingURL=delete-plans-id.d.ts.map