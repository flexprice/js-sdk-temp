import * as z from "zod/v3";
export type GetWalletsIdRequest = {
    /**
     * Wallet ID
     */
    id: string;
};
/** @internal */
export type GetWalletsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetWalletsIdRequest$outboundSchema: z.ZodType<GetWalletsIdRequest$Outbound, z.ZodTypeDef, GetWalletsIdRequest>;
export declare function getWalletsIdRequestToJSON(getWalletsIdRequest: GetWalletsIdRequest): string;
//# sourceMappingURL=getwalletsid.d.ts.map