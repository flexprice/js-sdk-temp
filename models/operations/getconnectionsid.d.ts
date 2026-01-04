import * as z from "zod/v3";
export type GetConnectionsIdRequest = {
    /**
     * Connection ID
     */
    id: string;
};
/** @internal */
export type GetConnectionsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetConnectionsIdRequest$outboundSchema: z.ZodType<GetConnectionsIdRequest$Outbound, z.ZodTypeDef, GetConnectionsIdRequest>;
export declare function getConnectionsIdRequestToJSON(getConnectionsIdRequest: GetConnectionsIdRequest): string;
//# sourceMappingURL=getconnectionsid.d.ts.map