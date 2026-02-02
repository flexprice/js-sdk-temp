import * as z from "zod/v3";
export type GetCustomersWalletsRequest = {
    expand?: string | undefined;
    fromCache?: boolean | undefined;
    id?: string | undefined;
    includeRealTimeBalance?: boolean | undefined;
    lookupKey?: string | undefined;
};
/** @internal */
export type GetCustomersWalletsRequest$Outbound = {
    expand?: string | undefined;
    from_cache: boolean;
    id?: string | undefined;
    include_real_time_balance: boolean;
    lookup_key?: string | undefined;
};
/** @internal */
export declare const GetCustomersWalletsRequest$outboundSchema: z.ZodType<GetCustomersWalletsRequest$Outbound, z.ZodTypeDef, GetCustomersWalletsRequest>;
export declare function getCustomersWalletsRequestToJSON(getCustomersWalletsRequest: GetCustomersWalletsRequest): string;
//# sourceMappingURL=get-customers-wallets.d.ts.map