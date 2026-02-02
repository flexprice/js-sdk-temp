import * as z from "zod/v3";
export type DeleteAddonsIdRequest = {
    /**
     * Addon ID
     */
    id: string;
};
/** @internal */
export type DeleteAddonsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteAddonsIdRequest$outboundSchema: z.ZodType<DeleteAddonsIdRequest$Outbound, z.ZodTypeDef, DeleteAddonsIdRequest>;
export declare function deleteAddonsIdRequestToJSON(deleteAddonsIdRequest: DeleteAddonsIdRequest): string;
//# sourceMappingURL=delete-addons-id.d.ts.map