import * as z from "zod/v3";
export type GetWalletsIdBalanceRealTimeRequest = {
    /**
     * Wallet ID
     */
    id: string;
    /**
     * Expand fields (e.g., credits_available_breakdown)
     */
    expand?: string | undefined;
};
/** @internal */
export type GetWalletsIdBalanceRealTimeRequest$Outbound = {
    id: string;
    expand?: string | undefined;
};
/** @internal */
export declare const GetWalletsIdBalanceRealTimeRequest$outboundSchema: z.ZodType<GetWalletsIdBalanceRealTimeRequest$Outbound, z.ZodTypeDef, GetWalletsIdBalanceRealTimeRequest>;
export declare function getWalletsIdBalanceRealTimeRequestToJSON(getWalletsIdBalanceRealTimeRequest: GetWalletsIdBalanceRealTimeRequest): string;
//# sourceMappingURL=get-wallets-id-balance-real-time.d.ts.map