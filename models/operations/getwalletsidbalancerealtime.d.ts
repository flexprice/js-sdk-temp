import * as z from "zod/v3";
export type GetWalletsIdBalanceRealTimeRequest = {
    /**
     * Wallet ID
     */
    id: string;
};
/** @internal */
export type GetWalletsIdBalanceRealTimeRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetWalletsIdBalanceRealTimeRequest$outboundSchema: z.ZodType<GetWalletsIdBalanceRealTimeRequest$Outbound, z.ZodTypeDef, GetWalletsIdBalanceRealTimeRequest>;
export declare function getWalletsIdBalanceRealTimeRequestToJSON(getWalletsIdBalanceRealTimeRequest: GetWalletsIdBalanceRealTimeRequest): string;
//# sourceMappingURL=getwalletsidbalancerealtime.d.ts.map