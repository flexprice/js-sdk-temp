import * as z from "zod/v3";
export type DeleteGroupsIdRequest = {
    /**
     * Group ID
     */
    id: string;
};
/** @internal */
export type DeleteGroupsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteGroupsIdRequest$outboundSchema: z.ZodType<DeleteGroupsIdRequest$Outbound, z.ZodTypeDef, DeleteGroupsIdRequest>;
export declare function deleteGroupsIdRequestToJSON(deleteGroupsIdRequest: DeleteGroupsIdRequest): string;
//# sourceMappingURL=delete-groups-id.d.ts.map