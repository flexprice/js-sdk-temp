import * as z from "zod/v3";
export type GetGroupsIdRequest = {
    /**
     * Group ID
     */
    id: string;
};
/** @internal */
export type GetGroupsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetGroupsIdRequest$outboundSchema: z.ZodType<GetGroupsIdRequest$Outbound, z.ZodTypeDef, GetGroupsIdRequest>;
export declare function getGroupsIdRequestToJSON(getGroupsIdRequest: GetGroupsIdRequest): string;
//# sourceMappingURL=getgroupsid.d.ts.map