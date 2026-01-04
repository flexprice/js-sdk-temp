import * as z from "zod/v3";
export type DeleteConnectionsIdRequest = {
    /**
     * Connection ID
     */
    id: string;
};
/** @internal */
export type DeleteConnectionsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteConnectionsIdRequest$outboundSchema: z.ZodType<DeleteConnectionsIdRequest$Outbound, z.ZodTypeDef, DeleteConnectionsIdRequest>;
export declare function deleteConnectionsIdRequestToJSON(deleteConnectionsIdRequest: DeleteConnectionsIdRequest): string;
//# sourceMappingURL=deleteconnectionsid.d.ts.map